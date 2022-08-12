export const metadataToDynamicRender = (metadataArray, slice, primary) =>{
    const wrapperLeft = {
        id:"abmWrapperLeft",
        component:"html|div",
        styles:{
            display:"flex",
            justifyContent:"flex-start",
            alignContent:"flex-start",
            flexWrap:"wrap",
            flex:3
        },
        children: metadataArray.map((data)=> Object.keys(data).map((key)=>{
            return sqlToComponent(data[key], key);
        })).reduce((dynamicRenderArray, entities)=>{
            entities.forEach(entity=>dynamicRenderArray.push(entity));
            return dynamicRenderArray;
        })
    }
    const wrapperRight={
        id:"abmWrapperRight",
        component:"html|div",
        styles:{
            display:"flex",
            justifyContent:"flex-start",
            paddingLeft:70,
            flex:1
        },
        children:[
            {
                id: "abmList",
                component: "VirtualizedList",
                styles:{},
                props: {
                    slice,
                    primary
                }
            }
        ]
    }

    return [wrapperLeft, wrapperRight]
}


export const sqlToComponent = (dataType, field) =>{
    switch (dataType){
        default:
            return {
                id: field,
                component:"Material|TextField",
                props:{
                    label: field
                },
                styles:{
                    paddingRight:50
                },
            }
    }
}

export const selectedMetadataToContent = (metadataArray, selected, primary) =>{
    const metadataArr = metadataArray.map((metadata)=> Object.keys(metadata).filter(key =>
        selected[key] ?? false).reduce((obj, key) =>
        {
            obj[key] = metadata[key];
            return obj;
        }, {}
    ))
    return metadataToDynamicRender(metadataArr,'abm',primary)
}