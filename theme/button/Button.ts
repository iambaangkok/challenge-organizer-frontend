import { createTheme } from "@mui/material/styles";

// Color code 
var PrimaryLight = '#FFDDAE';
var PrimaryMain = '#FA9C1D';
var PrimaryDark = '#EA7000';
var SecondaryLight = '#F6F7F9';
var SecondaryMain = '#F2F3F5';
var SecondaryDark = '#ECEDEF';
var White = '#FFFFFF';

// * Important: define variant = 'contained' and size in MUI button elements

export const ButtonTheme = createTheme({
    components: {
        'MuiButton': {
            styleOverrides: {
                root: {
                    fontStyle: 'normal' ,
                    fontWeight: '700' ,
                    boxShadow: 'none',
                    ':hover': {
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                    },
                    ':active': {
                        transform: 'scale(0.99)',
                    },
                    ':disabled': {
                        opacity: '0.5'
                    }
                },
                containedPrimary: {
                    color: White,
                    ':disabled': {
                        color: White,
                        backgroundColor: PrimaryMain,
                    }
                },
                containedSecondary: {
                    color: PrimaryMain ,
                    ':disabled': {
                        color: PrimaryMain,
                        backgroundColor: SecondaryMain,
                    }
                },
                containedSizeSmall: {
                    fontSize: '12px',
                    padding: '6px 12px',
                    borderRadius: '8px'
                },
                containedSizeMedium: {
                    fontSize: '14px',
                    padding: '10px 16px',
                    borderRadius: '11px'
                },
                containedSizeLarge: {
                    fontSize: '16px',
                    padding: '14px 20px',
                    borderRadius: '15px'
                },
            },
        }
    },
    typography: {
        fontFamily: 'Inter',
    },
    palette: {
        primary: {
            main: PrimaryMain,
            light: PrimaryLight,
            dark: PrimaryMain, // use Primary/Main because hover color == default color
        },
        secondary: {
            main: SecondaryMain,
            light: SecondaryLight,
            dark: SecondaryMain  // use Secondary/Main because hover color == default color
        },
    }
})