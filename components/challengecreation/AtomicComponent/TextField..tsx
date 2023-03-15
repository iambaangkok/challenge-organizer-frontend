import { createTheme, TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#EA7000',
            contrastText: '#FFFFFF',
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

export default function TextField_(data: any) {
    var height = data.height;
    if (data.multiline) {
        height = height;
    } else {
    }
   
    const [text, setText] = React.useState<any>('');

    useEffect(() => {
        // console.log("useeffect "+ text)
        data.returnText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text]);

    const handleChange = async (e: any) => {
        // console.log(data.max)
        // console.log(e.target.value)
        // console.log("target = "+e.target.value.toString())
        // console.log("curTarget = "+e.currentTarget.value.toString())
        // console.log(Number(e.target.value))
        // console.log(e.target.value.toString().length)

        // if (e.target.value.toString().length <= data.max) {
        //     // console.log("textbefroe = "+text)
        //     data.num
        //         ? setText(Number(e.target.value))
        //         : setText(e.target.value.toString());

        //     setText(e.target.value.toString());
        // }
        // if (e.target.value.toString().length > data.max) {
        //     data.returnLimit(data.max);
        // } else {
        //     data.returnLimit(e.target.value.toString().length);
        // }
        if (data.num && Number(e.target.value) < 0) {
            setText('0');
            data.returnLimit(1);
            data.returnText('0');
        } else {
            setText(e.target.value);
            data.returnLimit(e.target.value.toString().length);
            data.returnText(e.target.value.toString());
        }
    };

    const iprop = {
        disableunderline: 'true',
        style: {
            fontSize: 14,
            fontFamily: 'Inter',
            fontWeight: 500,
            fontStyle: 'normal',
        },
        maxLength: data.max,
    };

    const ALPHA_REGEX = /^[0-9]+$/;
    const ALPHA_NUMERIC_REGEX = /^[0-9A-Za-z\u0E00-\u0E7F. \/]+$/;

    return (
        <ThemeProvider theme={theme}>
        <TextField
            id="outlined-multiline-flexible"
            multiline={data.multiline ? true : false}
            maxRows={4}
            label=""
            variant="outlined"
            fullWidth={true}
            type={data.num ? 'number' : 'any'}
            autoComplete="off"
            inputProps={iprop}
            onKeyDown={
                data.num
                    ? (evt) => {
                          console.log(evt.key);
                          if (evt.key !== 'Backspace') {
                              return (
                                  !ALPHA_REGEX.test(evt.key) &&
                                  evt.preventDefault()
                              );
                          }
                      }
                    : (evt) => {
                          if (evt.key !== 'Backspace' && evt.key !== ' ') {
                              return (
                                  !ALPHA_NUMERIC_REGEX.test(evt.key) &&
                                  evt.preventDefault()
                              );
                          }
                      }
            }
            onChange={(e) => handleChange(e)}
            // value ={data.num?Number(text):text}

            value={text}
            // defaultValue = {data.default}
        />
        </ThemeProvider>
    );
}
