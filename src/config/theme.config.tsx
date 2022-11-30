
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import React from 'react'

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = '#12181b',
    LIME = '#C8FA5F',
    FONT_GOBAL = "'JetBrains Mono', monospace",
    //Alert styles 
    ERROR_MAIN = '#f44336',
    BG_ERROR_MAIN = "RGBA(244,67,54,0.1)",
    WHITE = "#fff",
}

const theme = createTheme(
    {
        palette: {
            mode: 'dark',
            background: {
                default: themePalette.BG,
            },
            primary: {
                main: themePalette.LIME,
            }
        },
        typography: {
            fontFamily: themePalette.FONT_GOBAL,
            allVariants: {
                color: themePalette.WHITE
            }
        }
    }
)

export const Themeconfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
