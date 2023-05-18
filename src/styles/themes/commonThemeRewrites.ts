import {Components, Palette, Theme} from "@mui/material";
import {TypographyOptions} from "@mui/material/styles/createTypography";

export const commonThemeRewritesComponents: Components<Omit<Theme, "components">> = {
    MuiPaper: {
        styleOverrides: {
            rounded: {borderRadius: '24px'},
        },
    },
    MuiBackdrop:{
        styleOverrides: {
            root: {
                background: 'rgb(15 16 17 / 90%)'
            }
        }
    },
    MuiButton: {
        defaultProps: {
            disableElevation: true
        },
        styleOverrides: {
            root: {minWidth: 0, boxShadow: "none", borderRadius:'10px'},
            containedSizeLarge: {
                padding: '11px 20px'
            }
        }
    },
    MuiLinearProgress:{
      styleOverrides: {
          root: {
              background: '#eee',
              height: '8px',
              borderRadius: '12px'
          },
          bar: {borderRadius: '12px'}
      }
    },
    MuiInputBase: {
        styleOverrides: {
            root: (props) => {
                return {
                    background: props.theme.palette.background.default,
                    lineHeight: 1.3,
                    borderRadius: '12px',
                    padding: "14px 20px",
                }
            },
            input: {
                height: 'auto',
                padding: '0px'
            }
        },
    }
}


const titles = {
    lineHeight: 1.3,
    fontWeight: 400
}

export const commonThemeRewritesTypo: TypographyOptions | ((palette: Palette) => TypographyOptions) = (palette)=>{
    return {
        fontFamily: 'Neue Machina, sans-serif',
        caption: {
            fontSize: 16,
            lineHeight: 1.3
        },
        button: {
            textTransform: 'none'
        },
        h1: {
            ...titles,
            fontSize: 32,
        },
        h2: {
            ...titles,
            fontSize: 24
        },
        h3: {
            ...titles,
        },
        h4: {
            ...titles,
        },
        h5: {
            ...titles,
        },
        h6: {
            ...titles,
        },
        htmlFontSize: 16,
    }
}