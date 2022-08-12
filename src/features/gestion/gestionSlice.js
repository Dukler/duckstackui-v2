import {createSlice} from "@reduxjs/toolkit";

export const gestionSlice = createSlice({
    name: 'gestion',
    initialState: {
        byId: {
            lastName:{value:""},
            genderId: {
                value:'',
                source: [
                    {
                        value: 1,
                        label: "FEMENINO"
                    },
                    {
                        value: 2,
                        label: "MASCULINO"
                    },
                    {
                        value: 3,
                        label: "OTRO"
                    },
                ]
            },
            nacionalidad: {
                value:1,
                source: [
                    {
                        value: 1,
                        label: "CHILE"
                    },
                    {
                        value: 2,
                        label: "EXTRANJERO"
                    },
                    {
                        value: 3,
                        label: "PERMANENCIA DEFINITIVA"
                    },
                ]
            },
            tipoTrabajador: {
                value:1,
                source: [
                    {
                        value: 1,
                        label: "INDEPENDIENTE"
                    },
                    {
                        value: 2,
                        label: "DEPENDIENTE"
                    },
                    {
                        value: 3,
                        label: "NO TRABAJA"
                    },
                ]
            },
            claseCotizante: {
                value:1,
                source: [
                    {
                        value: 1,
                        label: "ACTIVO"
                    },
                    {
                        value: 2,
                        label: "PENSIONADO"
                    },
                    {
                        value: 3,
                        label: "NO COTIZA"
                    },
                ]
            },
            identificationTypeId: {
                value:1,
                source: [
                    {
                        value: 1,
                        label: "RUT"
                    },
                    {
                        value: 2,
                        label: "TIN"
                    },
                    {
                        value: 3,
                        label: "NIF"
                    },
                    {
                        value: 4,
                        label: "NUMERO DE DOCUMENTO"
                    }
                ]
            },
            actividad: {
                value:1,
                source: [
                    {
                        value: 1,
                        label: "ABOGADO"
                    },
                    {
                        value: 2,
                        label: "ADMINISTRATIVO"
                    },
                    {
                        value: 3,
                        label: "AGENTE DE BANCO"
                    },
                    {
                        value: 4,
                        label: "AGENTE DE VENTAS"
                    },
                    {
                        value: 5,
                        label: "AGRONOMO"
                    }
                ]
            },
            estadoCivil: {
                value:1,
                source: [
                    {
                        value: 1,
                        label: "SOLTERA/O"
                    },
                    {
                        value: 2,
                        label: "CASADA/O"
                    },
                    {
                        value: 3,
                        label: "DIVORCIADA/O"
                    },
                    {
                        value: 4,
                        label: "VIUDA/O"
                    },
                ]
            },
            sistemaSalud: {
                value:1,
                source: [
                    {
                        value: 1,
                        label: "NINGUNO"
                    },
                    {
                        value: 2,
                        label: "ISAPRE"
                    },
                    {
                        value: 3,
                        label: "FONASA"
                    },
                    {
                        value: 4,
                        label: "OTROS"
                    }
                ]
            },
        }
    },
    reducers: {
        setValue(state, action) {
            const {id,value} = action.payload;
            state.byId[id] = {...state.byId[id], value}
        },
        addData(state, action) {
            state.byId = {...state.byId, ...action.payload}
        },
        onValueChange(state, action) {
            state.byId[action.payload.id] = {...state.byId[action.payload.id], value:action.payload.value}
        },
        setSlice(state, action) {
            state.byId = action.payload
        },
        init(state) {
            state.isLoaded = true
        }
    },
    extraReducers: {}
})

export const {onValueChange, setSlice, addData} = gestionSlice.actions;