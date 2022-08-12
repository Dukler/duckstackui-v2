
import React, { useState} from 'react';
import {TextField, Button, Modal, Paper, } from "../../../components/Material";
import {makeStyles} from "@material-ui/core/styles";
import {getEntityMetadata} from "../../../src/andromedaAPI";
import { selectedMetadataToContent} from "../../../src/abmEngine";
import MetadataList from "../../../components/MetadataList";
import {uploadJson} from "../../../src/andromedaAPI/resource-storage";
import {getPageNameByLevel} from "../../../src/utils/url";

const useStyles = makeStyles({
    Modal: {
        padding:50,
        paddingTop:100
    }
});


export default function CreateABM({abmId}) {
    const classes = useStyles();
    const [metadata, setMetadata] = useState(null);
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = React.useState({});
    // const

    const submitRender = () =>{
        console.log(metadata);
        const data = selectedMetadataToContent([metadata], checked,'currencyDesc');
        uploadJson({data, name:'mockCurrency.json', domain:'abm', descriptiveName:'currency.json'})
    }

    const onClickHandler = async (e) =>{
        const data = await getEntityMetadata("mockCurrency");
        setMetadata(data)
        setOpen(true);
    }

    const handleToggle = ({event, key}) => {
        setChecked({...checked, [key]: !checked[key] ?? true});
    };

    return <>
        <TextField label={"Entidad"}/>
        <Button onClick={onClickHandler} variant="contained">Obtener</Button>
        <Modal
            open={open}
            onClose={(e)=>setOpen(false)}
            className={classes.Modal}
        >
            <Paper>
                <MetadataList metadata={metadata}
                              listItemProps={{button: true, onClick:handleToggle}}
                              checked={checked}/>
                <Button onClick={submitRender} variant="contained">Submit</Button>
            </Paper>
        </Modal>
    </>;
}

export async function getServerSideProps({req, res}) {
    // const data = await fetch("http://localhost:3000/api/mockCurrencyMetaData")
    //     .then(res => res.json())
    //     .then(data => data)

    // get(santaCruz)
    return {
        props: {
            render: {}
        }
    }
}