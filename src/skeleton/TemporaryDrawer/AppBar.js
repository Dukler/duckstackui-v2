import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import React from "react";
import MUIAppBar from "@material-ui/core/AppBar";


export default function AppBar ({classes, state, dispatch}){
    const {open} = state;
    return <MUIAppBar
        position="fixed"
        className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
        })}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={()=>dispatch({type:'drawerToggle'})}
                edge="start"
                className={clsx(classes.menuButton)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Mini variant drawer
            </Typography>
        </Toolbar>
    </MUIAppBar>
}