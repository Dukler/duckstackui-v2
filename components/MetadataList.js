import {Button, Checkbox, List, Modal, Paper} from "./Material";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";


export default function MetadataList({metadata, listItemProps, checked}) {
    const {onClick, ...listProps} = listItemProps;
    return <List>{
        Object.keys(metadata ?? {}).map((key, index) => {
            if (key === "__name") return;
            return <ListItem key={key} {...listProps} onClick={(event)=>onClick({key,event})}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked[key] ?? false}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{'aria-labelledby': key}}
                    />
                </ListItemIcon>
                <ListItemText primary={key}/>
            </ListItem>
        })
    }</List>
}