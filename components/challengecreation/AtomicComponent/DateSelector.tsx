import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { alpha, createTheme, styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FA9C1D',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FA9C1D',
                    },
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                        {
                            borderColor: '#EA7000',
                        },
                },
            },
        },
    },
});

export default function DateSelector(data: any) {

    const onError = () => {
        data.setAccept(false)
    }

    const onAccept = () => {
        data.setAccept(true)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <DatePicker
                    label=""
                    value={data.default}
                    onChange={(newValue: any) => {
                        data.returnDate(newValue);
                    }}
                    onAccept = {onAccept}
                    onError = {onError}
                    renderInput={(params: any) => <TextField {...params} />}
                    InputProps={{
                        sx: [
                            {
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#FA9C1D',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: '#FA9C1D',
                                    },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#FA9C1D',
                                },
                            },
                        ],
                    }}
                    disablePast
                />
            </ThemeProvider>
        </LocalizationProvider>
    );
}
