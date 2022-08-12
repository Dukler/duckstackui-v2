import {onValueChange} from "../features/common/actions";
import {useDispatch} from "react-redux";

export default function withTextInput(Component) {
    return (props) => {
        const dispatch = useDispatch();
        const {slice, id, state, ...newProps} = props;

        const handleChange = (e) => onValueChange({value: e.target.value, slice, id, dispatch})

        return <Component {...newProps}
                          id={id}
                          value={state?.value || ""}
                          onChange={handleChange}/>
    }
}