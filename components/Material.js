import MUITextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Checkbox from '@material-ui/core/Checkbox';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Select from '@material-ui/core/Select';
import withTextInput from "../src/HOCs/withTextInput";
import MUIDivider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const TextField = withTextInput(MUITextField)
const Divider = withTextInput(MUIDivider)

export {
    Box,
    Divider,
    TextField,
    Paper,
    Button,
    Modal,
    ListItem,
    ListItemText,
    List,
    Checkbox,
    BottomNavigation,
    BottomNavigationAction,
    Select,
    IconButton,
    Container
}