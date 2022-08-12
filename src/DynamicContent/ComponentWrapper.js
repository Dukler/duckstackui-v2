import {makeStyles} from "@material-ui/core/styles";
import React, {useRef} from "react";
import {useSelector} from "react-redux";
import dynamic from "next/dynamic";
import useEventListeners from "../hooks/useEventListeners";
import {onValueChange} from "../features/common/actions";

const useStyles = makeStyles({
    DynamicComponent: (props) => ({...props})
});

export default function ComponentWrapper({DynamicComponent, props, children, slice, eventListeners, additionalContent, selfWrap, modal}) {
    let {id, styles, ...newProps} = props;
    const classes = useStyles(styles);
    const isNotFragment = DynamicComponent?.type !== React.Fragment;

    //agrego estilos
    if (styles) newProps = {...newProps, className:classes.DynamicComponent};

    //asigno el id
    if (isNotFragment) newProps = {...newProps, id};

    // asigno el estado
    const state = useSelector(state => state?.[slice]?.byId[id])
    if (slice) {
        newProps = {...newProps, slice, state};
        newProps = {...newProps, actions: {setValue: (value) => onValueChange({...newProps, value})}}
    }

    if(modal) newProps = {...newProps, [modal.prop]:()=>{
        onValueChange({slice:newProps.slice, id:modal.id, value:!state?.value || true})
    }}

    // asigno contenido adicional
    if (additionalContent !== null) newProps = {...newProps, additionalContent}

    //asigno callbacks dinamicos
    // if (callbacks?.[id]) newProps = {...newProps, ...callbacks[id]}
    if (eventListeners) newProps = {...newProps,eventListeners}

    const [newPropsWithEvents] = useEventListeners(newProps);



    // if (callbacks?.all) newProps = {...newProps, ...callbacks.all}

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "http://localhost:8080/bundle.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    // },[])

    if (selfWrap?.DynamicComponent){
        return <ComponentWrapper {...selfWrap}>
            <DynamicComponent {...newPropsWithEvents}>{children}</DynamicComponent>
        </ComponentWrapper>
    }

    return <DynamicComponent {...newPropsWithEvents}>{children}</DynamicComponent>;
}