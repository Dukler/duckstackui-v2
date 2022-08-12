import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {onValueChange} from "../src/features/common/actions";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    formControl: {
        margin: theme.spacing(3),
        flex: "0 0 25%",
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

export default function Questionnaire({state, dispatch, slice, questionnaire, id, gridContainer, gridItem}) {
    const classes = useStyles();
    const value = state?.value;
    // const [value, setValue] = React.useState({});
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');


    const handleRadioChange = (event, i) => {
        // setValue({...value, [i]: event.target.value});
        onValueChange({slice, id, value: {...value, [i]: event.target.value}})
        setHelperText('');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid {...gridContainer} container>
                {
                    questionnaire?.map((form, i) => {
                        return <Grid {...gridItem} item>
                            <FormControl key={i} component="fieldset" error={error}
                                         className={classes.formControl}>
                                <FormLabel component="legend">{form.question}</FormLabel>
                                <RadioGroup aria-label="quiz" name="quiz" value={value?.[i] || ''}
                                            onChange={(e) => handleRadioChange(e, i)}>
                                    {
                                        form.choices.map((choice, index) => <FormControlLabel key={index}
                                                                                              value={form.choiceValues[index].toString()}
                                                                                              control={<Radio/>}
                                                                                              label={choice}/>)
                                    }
                                </RadioGroup>
                                {/*<FormHelperText>{helperText}</FormHelperText>*/}
                                {/*<Button type="submit" variant="outlined" color="primary" className={classes.button}>*/}
                                {/*    Check Answer*/}
                                {/*</Button>*/}
                            </FormControl>
                        </Grid>
                    })
                }
            </Grid>
        </form>
    );
}