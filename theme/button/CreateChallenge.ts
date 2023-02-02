import { createTheme } from "@mui/material/styles";

// declare module '@mui/material/styles' {
//     interface Theme {
//         palette: {
//             primary: {
//                 light: string;
//                 main: string;
//                 dark: string;
//                 contrastText: string;
//             }
//         };
//         typography: {
//             fontFamily: string;
//             fontWeightMedium: number;
//             fontSize: number;
//         };
//     }

//     interface ThemeOptions {
//         palette?: {
//             primary?: {
//                 light?: string;
//                 main?: string;
//                 dark?: string;
//                 contrastText?: string;
//             }
//         };
//         typography?: {
//             fontFamily?: string;
//             fontWeightMedium?: number;
//             fontSize?: number;
//         };
//     }
// }

export const createChallengeButton = createTheme({
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