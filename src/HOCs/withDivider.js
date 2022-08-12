import {onValueChange} from "../features/common/actions";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function withDivider(Component) {
    return (props) => {
        const classes = useStyles();
        const dispatch = useDispatch();
        const {slice, id, state, ...newProps} = props;

        const handleChange = (e) => onValueChange({value: e.target.value, slice, id, dispatch})

        return <Component {...newProps}
                          id={id}
                          value={state?.value || ""}
                          onChange={handleChange}/>
    }
}