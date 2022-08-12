import '../styles/globals.css'
import MiniDrawer from "../src/skeleton/MiniDrawer";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from "../src/store/store";
import {fetchRolesAPI} from "../src/features/roles/rolesSlice";
import { ThemeProvider } from '@material-ui/core/styles';
import DSUITheme from "../src/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp({Component, pageProps, router}) {
    const {route} = router;
    const [rolesAPI, setRolesAPI] = useState();


    useEffect(() => {
        store.dispatch(fetchRolesAPI())
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, [])

    if (route === '/login') return <Component {...pageProps} />
    return <Provider store={store}>
        <ThemeProvider theme={DSUITheme}>
            <CssBaseline />
            <MiniDrawer>
                <Component {...pageProps} />
            </MiniDrawer>
        </ThemeProvider>
    </Provider>
}

export default MyApp
