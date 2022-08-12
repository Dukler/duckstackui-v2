import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIAccordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {DynamicContentRenderer} from "../src/DynamicContent/DynamicContentRenderer";
import useDynamicScreen from "../src/hooks/useDynamicScreen";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    }
}));


export default function Accordion ({items, id, slice, detailContainerProps,...props}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(`panel0`);
    const [screen] = useDynamicScreen(items[0].details)
    const dispatch = useDispatch()



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root} {...props}>
            {
                items.map((accordion,index)=>
                    <MUIAccordion key={`accordion-${id}-${index}`} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}>
                            <Typography className={classes.heading}>{accordion.summary[0]}</Typography>
                            <Typography className={classes.secondaryHeading}>{accordion.summary[1]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div {...detailContainerProps}>
                                {DynamicContentRenderer({content:accordion.details,
                                    // callbacks:{
                                    //     all:{onChange: (e) => dispatch({type:`${slice}/set`, payload:{id: e.target.id, value: e.target.value}})}
                                    // },
                                    slice
                                })}
                            </div>
                        </AccordionDetails>
                    </MUIAccordion>
                )
            }
        </div>
    );
}