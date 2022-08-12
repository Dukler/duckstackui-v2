import {useStore} from "react-redux";
import {useEffect} from "react";

export default function useDynamicSlice (slice, reducer) {
    const store = useStore()
    useEffect(()=>{
        if(!store.asyncReducers[slice]){
            store.injectReducer(slice, reducer(slice));
        }
    },[])
}

