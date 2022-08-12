import {createReducer, createAction, createAsyncThunk} from "@reduxjs/toolkit";
import store from "../../store/store";

// const initialState = {
//     byId: {
//         lastName: {value: ""},
//         genderId: {
//             value: "1",
//             source: [
//                 {
//                     value: "1",
//                     label: "FEMENINO"
//                 },
//                 {
//                     value: 2,
//                     label: "MASCULINO"
//                 },
//                 {
//                     value: 3,
//                     label: "OTRO"
//                 },
//             ]
//         },
//         nacionalidad: {
//             value: 1,
//             source: [
//                 {
//                     value: 1,
//                     label: "CHILE"
//                 },
//                 {
//                     value: 2,
//                     label: "EXTRANJERO"
//                 },
//                 {
//                     value: 3,
//                     label: "PERMANENCIA DEFINITIVA"
//                 },
//             ]
//         },
//         tipoTrabajador: {
//             value: 1,
//             source: [
//                 {
//                     value: 1,
//                     label: "INDEPENDIENTE"
//                 },
//                 {
//                     value: 2,
//                     label: "DEPENDIENTE"
//                 },
//                 {
//                     value: 3,
//                     label: "NO TRABAJA"
//                 },
//             ]
//         },
//         claseCotizante: {
//             value: 1,
//             source: [
//                 {
//                     value: 1,
//                     label: "ACTIVO"
//                 },
//                 {
//                     value: 2,
//                     label: "PENSIONADO"
//                 },
//                 {
//                     value: 3,
//                     label: "NO COTIZA"
//                 },
//             ]
//         },
//         identificationTypeId: {
//             value: 1,
//             source: [
//                 {
//                     value: 1,
//                     label: "RUT"
//                 },
//                 {
//                     value: 2,
//                     label: "TIN"
//                 },
//                 {
//                     value: 3,
//                     label: "NIF"
//                 },
//                 {
//                     value: 4,
//                     label: "NUMERO DE DOCUMENTO"
//                 }
//             ]
//         },
//         actividad: {
//             value: 1,
//             source: [
//                 {
//                     value: 1,
//                     label: "ABOGADO"
//                 },
//                 {
//                     value: 2,
//                     label: "ADMINISTRATIVO"
//                 },
//                 {
//                     value: 3,
//                     label: "AGENTE DE BANCO"
//                 },
//                 {
//                     value: 4,
//                     label: "AGENTE DE VENTAS"
//                 },
//                 {
//                     value: 5,
//                     label: "AGRONOMO"
//                 }
//             ]
//         },
//         estadoCivil: {
//             value: 1,
//             source: [
//                 {
//                     value: 1,
//                     label: "SOLTERA/O"
//                 },
//                 {
//                     value: 2,
//                     label: "CASADA/O"
//                 },
//                 {
//                     value: 3,
//                     label: "DIVORCIADA/O"
//                 },
//                 {
//                     value: 4,
//                     label: "VIUDA/O"
//                 },
//             ]
//         },
//         sistemaSalud: {
//             value: 1,
//             source: [
//                 {
//                     value: 1,
//                     label: "NINGUNO"
//                 },
//                 {
//                     value: 2,
//                     label: "ISAPRE"
//                 },
//                 {
//                     value: 3,
//                     label: "FONASA"
//                 },
//                 {
//                     value: 4,
//                     label: "OTROS"
//                 }
//             ]
//         },
//     }
// }

const initialState = {
    byId:{
        gestionTable:{
            value:[
                {firstName:"asd"}
            ]
        }
    }
}


const gestionReducer = (slice, url) => {
    const setValue = createAction(`${slice}/setValue`)
    const fetchGestionSlice = createAsyncThunk(
        `${slice}/fetchGestionSlice`,
        async (thunkAPI) =>{
            // 200.126.196.123:8080/v1/view/data/gestion_person?id=5985
            // const response = await fetch("http://localhost:3000/api/roles")
            //     .then(res => res.json())
            const response = await fetch("http://10.30.40.51:49221/v1/view/data/gestion_person?id=2352")
                .then(res => res.json())
            return response
        }
    )
    store.dispatch(fetchGestionSlice());
    return createReducer(initialState, (builder) => {
        builder
            .addCase(setValue, (state, action) => {
                const {id, value} = action.payload;
                state.byId[id] = {...state.byId[id], value}
            })
            .addCase(fetchGestionSlice.fulfilled,(state, action)=>{
                //roles example
                Object.keys(action.payload).map(key=>state[key] = action.payload[key])
            })
    })
}

export default gestionReducer