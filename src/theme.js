import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a theme instance.
const DSUITheme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: 8
            }
        },
        MuiTextField: {
            root: {
                margin: 8,
                alignSelf: "center"
            }
        }
    },
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: '#fafafa',
        },
    },
});

export default DSUITheme;