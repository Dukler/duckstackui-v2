import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import store from "../store/store";
import {getMods} from "../utils/string";
import {withAndromedaEvents} from "../andromedaAPI/events";


export default function useEventListeners(props) {
    const [events, setEvents] = useState({});
    const {eventListeners, ...newProps} = props;
    const dispatch = useDispatch()


    useEffect(() => {
        let auxEvents = {};
        if (props.eventListeners) {
            Object.keys(props.eventListeners).forEach(
                (event, index, arr) => {
                    // const script = eventListeners[event].script;
                    const [prefix, script] = getMods(eventListeners[event].script);
                    const scriptProps = eventListeners[event].props;
                    const storeState = store.getState();
                    const state = storeState?.[newProps.slice]?.id;
                    import(`../scripts/${prefix}`).then(
                        module => {
                            auxEvents = {
                                ...auxEvents,
                                [event]: (eventProps) => withAndromedaEvents({
                                    callback: () =>
                                        module[script]({
                                            ...eventProps,
                                            dispatch, ...scriptProps,
                                            slice: newProps?.slice,
                                            storeState,
                                            id: newProps.id,
                                            state
                                        }),
                                    state, storeState
                                })
                            }
                            if (arr.length - 1 === index) setEvents(auxEvents)
                        }
                    )
                }
            )
        }

    }, [])

    return [{...events, ...newProps}, setEvents]
}