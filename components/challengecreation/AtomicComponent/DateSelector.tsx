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
interface Data {
    width: number;
    height: number;
}

export default function DateSelector(data: any) {
    const [value, setValue] = React.useState<Dayjs | null>();
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <DatePicker
                    label=""
                    value={data.default}
                    onChange={(newValue: any) => {
                        setValue(newValue);
                        data.returnDate(newValue);
                    }}
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
                    inputProps={{
                        style: {
                            fontSize: 14,
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontStyle: 'normal',
                        },
                    }}
                />
            </ThemeProvider>
        </LocalizationProvider>
    );
}
