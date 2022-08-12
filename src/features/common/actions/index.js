import store from "../../../store/store";


export const onValueChange = ({slice, id, value}) => {
    store.dispatch({
        type: `${slice}/setValue`,
        payload: {id, value}
    })
}