import MUIDrawer from '@material-ui/core/Drawer';
import RecursiveTreeView from "../../../components/RecursiveTreeView";
import React from "react";
import LinkList from "../../../components/LinkList";
import NestedList from "../../../components/NestedLinkList";


const list = [
    {
        label:"root",
        path:"/",
        page:"/",
        icon:""
    },
    {
        label:"menu",
        path:"/menu",
        page:"/menu",
        icon:"menu"
    },
    {
        label:"abm",
        path:"/abm",
        page:"/abm",
        icon:"payments"
    }
]

export default function Drawer ({classes, state, dispatch}){
    const {open} = state;

    const handleDrawerClose = () => {
        dispatch({type:'drawerClose'})
    };

    return <MUIDrawer
        anchor={'left'}
        open={open}
        onClose={handleDrawerClose}>
        <div className={classes.toolbar}/>
        <div className={classes.list} role="presentation">
            {/*<RecursiveTreeView/>*/}
            {/*<LinkList list={list}/>*/}
            <NestedList/>
        </div>
    </MUIDrawer>
}