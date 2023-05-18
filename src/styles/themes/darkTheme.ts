import createTheme from "@mui/material/styles/createTheme";
import {commonThemeRewritesComponents, commonThemeRewritesTypo} from "@styles/themes/commonThemeRewrites";

const darkTheme = createTheme({
    typography: commonThemeRewritesTypo,
    components:{
        ...commonThemeRewritesComponents
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFBD3A',
            light: '#FFBD3A',
            dark: '#FFBD3A',
            contrastText: '#0F0D0D',
        },
        secondary: {
            main: 'rgba(15,13,13,0.1)',
            contrastText: '#0F0D0D',
            dark: 'rgba(15,13,13,0.15)',
            light: '#7D7C7C',
        },
        info: {
            main: '#fff',
            contrastText: '#0F0D0D',
            dark: '#ececec',
            light: '#fff',
        },
        background: {
            default: '#262525',
            paper: '#0F0D0D',
        },
        text: {
            primary: '#fff',
            secondary: '#c7c7c7',
            disabled: '#676767',
        },
        error: {
            main: '#FF3A3A', // +
            contrastText: '#ffffff',
        }
    },
})

darkTheme.shadows[1] = "10px 10px 20px rgba(15, 13, 13, 0.25)";


export {
    darkTheme
}