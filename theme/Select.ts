import { createTheme } from '@mui/material/styles';

export const SelectTheme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FA9C1D',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FA9C1D',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FA9C1D',
                    },
                },
            },
        },
    },
});
