import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {rolesSlice} from "../features/roles/rolesSlice";
import {abmSlice} from "../features/abm/abmSlice";
import {gestionSlice} from "../features/gestion/gestionSlice";

const staticReducers = {
    roles: rolesSlice.reducer,
    abm: abmSlice.reducer
    // gestion: gestionSlice.reducer
}

const store = configureStore({
    reducer: {
        ...staticReducers
    },
})

store.asyncReducers = {};

store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
}

function createReducer (asyncReducers){
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    })
}


export default store