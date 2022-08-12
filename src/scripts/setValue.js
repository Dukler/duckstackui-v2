

export default async function setValue({dispatch,componentId,slice,value}) {
    // const sliceState = appState?.[slice];
    // const values = ['lastName','firstName','genderId','identificationType','identification']
    // let params = '?'
    // values.forEach((value)=> {
    //     if (sliceState?.byId?.[value] && sliceState?.byId?.[value].value !== ''){
    //         // console.log(`${value}=${sliceState.byId[value].value}`)
    //         params = params.concat(`${value}=${sliceState.byId[value].value}&`)
    //     }
    // })
    // params = params.slice(0,-1)
    // console.log("state",sliceState)
    dispatch({type:`${slice}/setValue`, payload:{id:componentId, value: value}})
}