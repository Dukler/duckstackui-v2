import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import LinkList from "../../../components/LinkList";
import {useTheme} from "@material-ui/core/styles";
import MUIDrawer from '@material-ui/core/Drawer';
import NestedList from "../../../components/NestedLinkList";
import RecursiveTreeView from "../../../components/RecursiveTreeView";

const list = [
    {
        label:"root",
        path:"/",
        page:"/",
        icon:""
    },
    {
        label:"menu",
        path:"/menu",
        page:"/menu",
        icon:"menu"
    },
    {
        label:"abm",
        path:"/abm",
        page:"/abm",
        icon:"payments"
    }
]


export default function Drawer ({classes, state, dispatch}){

    const theme = useTheme();
    const {open} = state;

    const handleDrawerClose = () => {
        dispatch({type:'drawerClose'})
    };

    return <MUIDrawer
        variant="permanent"
        className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        })}
        classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
        }}
    >
        <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </div>
        <Divider />
            {/*<RecursiveTreeView/>*/}
            <LinkList list={list} />
            {/*<NestedList/>*/}
        <Divider />
    </MUIDrawer>
}