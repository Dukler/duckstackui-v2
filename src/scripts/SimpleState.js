import {searchPerson} from "../andromedaAPI/party";

export function setValue({dispatch,componentId,slice,value}) {
    dispatch({type:`${slice}/setValue`, payload:{id:componentId, value: value}})
}

export function pushValue({dispatch,componentId,slice,value,data,appState}) {
    const sliceState = appState?.[slice];
    const state = sliceState?.byId?.[componentId];
    let valueToPush = {};
    if (data){
        for (const key of Object.keys(data)) {
            let compValue = {};
            if(data[key].includes("byId.")) compValue = getDataFromString(data[key],sliceState)
            valueToPush = {...valueToPush, [key]: compValue}
        }
    }
    dispatch({type:`${slice}/setValue`, payload:{id:componentId, value: [...state?.value || [], valueToPush ]}})
}

function getDataFromString(string, state){
    let value = state;
    string.split(".").forEach((att) => {
        value = value[att]
    })
    return value
}