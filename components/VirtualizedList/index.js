import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, {useEffect, useState} from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { areEqual } from "react-window";
import {useSelector} from "react-redux";

const Row = React.memo(({ index, style, data }) => {
    // const  = props;
    const {itemsArray, onClickListItem, primary} = data;
    const item = itemsArray[index];

    return (
        <ListItem button style={style} key={index} onClick={(event)=>onClickListItem({event,item,primary})}>
            <ListItemText primary={`${item.primary}`} />
        </ListItem>
    );
}, areEqual);

const VirtualizedList = ({items, slice, onClickListItem, id, primary}) => {
    const [data, setData] = useState([]);
    const rawData = useSelector(state=>state[slice]?.byId[id])


    useEffect(()=>{
        setData(
            items ||
            rawData?.map((row)=>{
                return {primary:row[primary]}
            })
        )
    },[rawData])

    return <AutoSizer>
        {({height, width}) => (
            <List
                className="List"
                height={height}
                itemCount={data?.length}
                itemSize={35}
                width={width}
                itemData={{itemsArray:data,onClickListItem,primary}}
            >
                {Row}
            </List>
        )}
    </AutoSizer>
};

export default VirtualizedList