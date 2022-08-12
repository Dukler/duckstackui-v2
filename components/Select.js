
import MenuItem from "@material-ui/core/MenuItem";
import MUISelect from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Select({slice,items,id,variant,label,style,state,actions,...rest}){
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        actions?.setValue(e.target.value)
    }

    return <FormControl variant="filled" className={classes.formControl} style={style}>
        <InputLabel id={`select-${slice}-${id}-label`}>{label}</InputLabel>
        <MUISelect
            labelId={`select-${slice}-${id}-label`}
            id={id}
            value={state?.value || ""}
            {...rest}
            onChange={handleChange}>
            <MenuItem value="">
                <em>VACIO</em>
            </MenuItem>
            {state?.source?.map((item)=><MenuItem key={`select-${id}-${item.label}`} value={item.value}>{item.label}</MenuItem>)}
        </MUISelect>
    </FormControl>
}