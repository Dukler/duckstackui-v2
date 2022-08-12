import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const abmSlice = createSlice({
    name:'abm',
    initialState:{
        isLoaded:true,
        byId:{}
    },
    reducers:{
        addListSource(state,action){
          state.byId = {...state.byId, ...action.payload}
        },
        addData(state,action){
          state.byId = {...state.byId, ...action.payload}
        },
        onValueChange(state, action){
            state.byId[action.payload.id] = {...state.byId[action.payload.id], value:action.payload.value}
        },
        setSlice(state, action){
            state.byId = action.payload
        },
        init(state){
            state.isLoaded = true
        }
    },
    extraReducers:{}
})

export const {onValueChange, setSlice, addData} = abmSlice.actions;