import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {onValueChange} from "../src/features/common/actions";
import {useDispatch} from "react-redux";


export default function DatePicker({id, slice, state, ...props}) {
    const dispatch = useDispatch();

    const handleDateChange = (date) => {
        onValueChange({value:date.toString(), slice, id, dispatch})
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={state?.value}
                onChange={handleDateChange}
                {...props}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}