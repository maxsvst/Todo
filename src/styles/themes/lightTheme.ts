import createTheme from "@mui/material/styles/createTheme";
import {commonThemeRewritesComponents, commonThemeRewritesTypo} from "@styles/themes/commonThemeRewrites";

const lightTheme = createTheme({
    typography: commonThemeRewritesTypo,
    components:{
        ...commonThemeRewritesComponents,
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#FFBD3A',
            light: '#FFBD3A',
            dark: '#FFBD3A',
        },
        secondary: {
            main: 'rgba(15,13,13,0.1)',
            contrastText: '0F0D0D',
            dark: 'rgba(15,13,13,0.15)',
            light: 'rgba(15,13,13,0.07)',
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#232323',
            secondary: '#232323',
            disabled: '#676767'
        },
        error: {
            main: '#FF3A3A',
            contrastText: 'rgba(255,255,255,0.87)',
        },
    },
})
lightTheme.shadows[1] = "10px 10px 20px rgba(15, 13, 13, 0.25)"


export {
    lightTheme
};