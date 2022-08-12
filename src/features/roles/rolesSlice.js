import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchRolesAPI = createAsyncThunk(
    'roles/fetchRolesAPI',
    async (thunkAPI) =>{
        const response = await fetch("http://localhost:3000/api/roles")
            .then(res => res.json())
        return response
    }
)

export const rolesSlice = createSlice({
    name:'roles',
    initialState:{
        isLoaded: false
    },
    reducers:{},
    extraReducers:{
        [fetchRolesAPI.fulfilled]:(state, action) =>{
            Object.keys(action.payload).map(key=>state[key] = action.payload[key])
            state.isLoaded = true;
        }
    }
})

