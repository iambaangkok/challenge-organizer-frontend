import { createTheme } from '@mui/material/styles';

var PrimaryMain = '#FA9C1D';
var PrimaryLight = '#FFDDAE';

export const SelectTheme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: PrimaryMain,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: PrimaryMain,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: PrimaryMain,
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ':hover': {
                        background: PrimaryLight
                    },     
                },

            },
        },
    },
});
