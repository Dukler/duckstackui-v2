import Typography from "@material-ui/core/Typography";
import React, {useEffect} from "react";
import Divider from "@material-ui/core/Divider";
import {IconButton} from "./Material";
import Icon from '@material-ui/core/Icon';


export default function FormTitle(props) {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "50%",
        ...props?.style}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"space-between",
            }}>
                <Typography variant="h6" noWrap>
                    {props.title}
                </Typography>
                <IconButton size="small" onClick={props?.onClick}>
                    <Icon fontSize="small">add</Icon>
                </IconButton>
            </div>
        {props.divider ? <Divider/> : null }
        {props.children}
    </div>
}