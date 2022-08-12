// import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import List from "@material-ui/core/List";
import Icon from "@material-ui/core/Icon";
import Link from "./Link";

export default function LinkList ({list}){
    return <List>
        {list?.map((item, index) => (
            <Link key={`${item.label}-${index}`} href={item.page} as={item.path}>
                <ListItem button >
                    <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItem>
            </Link>
        ))}
    </List>
}

