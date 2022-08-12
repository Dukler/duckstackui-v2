import React, {useEffect} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import {TabPanel} from "./TabPanel";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width:"100%"
    },
});

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default function DynamicTabs({style,tabs,additionalContent, ...rest}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

    useEffect(()=>{},[])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Paper className={classes.root} style={style}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {
                        tabs?.ids?.map((tabId,index)=><Tab key={`${tabId}-${index}`} label={tabs?.byId?.[tabId]?.label || ""}  {...a11yProps(index)}/>)
                    }
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>
                {
                    tabs?.ids?.map((tabId,index)=>
                        <TabPanel key={`${tabId}-${index}`} value={value} index={index} dir={theme.direction}>
                            {additionalContent?.[tabId]}
                        </TabPanel>
                    )
                }
            </SwipeableViews>
        </Paper>
    );
}