import {useEffect, useState, Fragment} from "react";
import {Button, TextField} from "../../../../components/Material";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";
import {getEntityMetadata, getScreenJSON} from "../../../../src/andromedaAPI";
import {useRouter} from 'next/router'
import MetadataList from "../../../../components/MetadataList";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {downloadJson, uploadJson} from "../../../../src/andromedaAPI/resource-storage";
import {selectedMetadataToContent} from "../../../../src/abmEngine";
import {getPageNameByLevel} from "../../../../src/utils/url";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function ABMEdit({abmId, screen, entitiesArray, metadataList}) {
    const [checked, setChecked] = useState({});
    const [entityToAdd, setEntityToAdd] = useState("");
    const classes = useStyles();
    const router = useRouter();

    useEffect(() => {
        setChecked(screen.reduce((checks, jsonObject) => {
            checks[jsonObject.id] = true;
            return checks;
        }, {}))
    }, [])

    const onClickAddEntity = async () => {
        const updatedEntities = entitiesArray.includes(entityToAdd) ? entitiesArray : [...entitiesArray,entityToAdd];
        const data = {primary:"",entities:updatedEntities}
        uploadJson({data,name:`${abmId}.json`,domain:'metadata',descriptiveName:`${abmId}.json`});
    }

    const onClickFields = () => {
        const updatedScreen = selectedMetadataToContent({metadataArray:metadataList,selected:checked});
        uploadJson({data:updatedScreen,name:`${abmId}.json`,domain:'abm',descriptiveName:`${abmId}.json`})
        router.push({
            pathname: `/abm/[id]`,
            query: {id: abmId}
        })

    }
    const handleToggle = ({event, key}) => {
        setChecked({...checked, [key]: !checked[key] ?? true});
    };

    return <div>
        <TextField label='New entity' value={entityToAdd} onChange={(e)=>setEntityToAdd(e.target.value)}/>
        <Button variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon/>}
                onClick={onClickAddEntity}>
            Add entity
        </Button>
        {metadataList?.map((metadata,index)=>{
            return <Fragment key={`metadata-${index}`}>
                <Typography>
                    {metadata.__name}
                </Typography>
                <Divider/>
                <MetadataList metadata={metadata} listItemProps={{button: true, onClick:handleToggle}} checked={checked}/>
            </Fragment>
        })}
        <Button variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon/>}
                onClick={onClickFields}>
            Ok
        </Button>

    </div>
}

export async function getServerSideProps({req, res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    );
    const abmId = getPageNameByLevel(req.url, 2);

    // hay que mejorar esto para que sea 1 sola llamada
    let metadataList = [];
    const screenConfig = await downloadJson(`/metadata/${abmId}.json`);
    for (const entity of screenConfig?.entities) {
        metadataList.push(await getEntityMetadata(entity))
    }
    const screen = await downloadJson(`/abm/${abmId}.json`);

    return {
        props: {
            abmId,
            screen,
            entitiesArray:screenConfig.entities,
            metadataList
        }
    };
}
