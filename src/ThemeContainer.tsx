import React, {FC, useMemo} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {Theme} from "@const/types/ui";
import {darkTheme} from "@styles/themes/darkTheme";
import {lightTheme} from "@styles/themes/lightTheme";

type TProps = {
    children:React.ReactNode
    defaultTheme?: Theme
}

const ThemeContainer:FC<TProps> = ({children, defaultTheme}) => {
    const themeName = defaultTheme || Theme.Dark;

    const theme = useMemo(()=>{
        return themeName === Theme.Light ? lightTheme : darkTheme;
    }, [themeName])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    body: { lineHeight: 1.3 },
                }}
            />
            {children}
        </ThemeProvider>
    );
};

export default ThemeContainer;