import { createTheme } from "@mui/material/styles";

export const createChallengeButtonTheme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#DB8D23',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Inter',
        fontWeightMedium: 600,
        fontSize: 15
    },
})