import React, {useEffect, useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from "./AppBar";
import reducer from "./reducer";
import Drawer from "./Drawer";
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 200,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingTop: theme.mixins.toolbar.height,
        height:`88vh`
    },
}));
const initialState = {open: false};


export default function TemporaryDrawer({host, children}) {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleDrawer = (event) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }

        dispatch({type:'drawerToggle'})
    };

    useEffect(()=>{
        dispatch({type:'drawerClose'})
    },[])

    return (
        <div>
            <CssBaseline />
            <AppBar classes={classes} state={state} dispatch={dispatch}/>
            <Drawer classes={classes} state={state} dispatch={dispatch}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
}