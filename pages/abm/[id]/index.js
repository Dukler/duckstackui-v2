import {useEffect} from "react";
import {Button} from "../../../components/Material";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import {useRouter} from 'next/router'
import {getAbmData} from "../../../src/andromedaAPI";
import useDynamicScreen from "../../../src/hooks/useDynamicScreen";
import {getAllowedJSON} from "../../../src/andromedaAPI/resource-storage";
import {getPageNameByLevel} from "../../../src/utils/url";
import {useDispatch, useSelector} from "react-redux";
import {addData, onValueChange, setSlice} from "../../../src/features/abm/abmSlice";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    contentBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "100%"
    },
    list: {
        display: "flex",
        flex: 1,
        paddingLeft: 70
    },
    content: {
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        flexWrap: "wrap",
        flex: 3,
    }
}));

export default function ABM({content, rawData, abmId}) {
    const classes = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const callbacks = {
        all: {
            onChange: (e) => dispatch(onValueChange({id: e.target.id, value: e.target.value}))
            // onChange: (e) => dispatch({type:'abm/onValueChange', id: e.target.id, value: e.target.value})
        },
        abmList: {
            onClickListItem: ({item, primary}) =>
                state.byId?.abmList?.forEach(row => {
                    if (row[primary] === item.primary)
                        dispatch(addData(row))
                })
        }
    }
    const [screen, setScreen] = useDynamicScreen(content, callbacks, 'abm')
    const state = useSelector(state => state.abm)

    useEffect(() => {
        dispatch(addData({abmList: rawData}))
    }, [])

    useEffect(() => {
        // console.log(content);
        // console.log(router.query.edit ?? true)
        // console.log('state', state)
    }, [state])


    const onClickEdit = (event) => {
        router.push(`${router.query.id}/edit`)

        // console.log(router.query.id)
    }

    return <>
        <div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon/>}
                onClick={onClickEdit}
            >
                Delete
            </Button>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}>
                Send
            </Button>

        </div>
        <div className={classes.contentBox}>
            {screen}
        </div>
    </>
}

export async function getServerSideProps({req, res, query}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    );

    const abmId = getPageNameByLevel(req.url, 2);

    //datos de la db
    const rawData = await getAbmData(abmId)


    const content = await getAllowedJSON(`/abm/${abmId}.json`);
    // const content = {}

    return {
        props: {
            abmId,
            content,
            rawData
        }
    };
}

