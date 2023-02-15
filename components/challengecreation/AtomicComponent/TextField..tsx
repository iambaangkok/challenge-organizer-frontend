import { breadcrumbsClasses, TextField } from '@mui/material';
import { alpha, createTheme, styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { Interface } from 'node:readline/promises';
import React from 'react';
import { textSpanEnd } from 'typescript';
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
const styles = {
    refont: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
    },
};

interface textData {
    width: number;
    height: number;
    max: number;
    multiline: Boolean;
}

export default function TextField_(data: any) {
    var fieldId = '';
    var height = data.height;
    if (data.multiline) {
        fieldId = 'outlined-multiline-flexible';
        height = height;
    } else {
        fieldId = 'outlined-basic';
    }

    const [text, setText] = React.useState<any>('');
    useEffect(() => {
        // console.log("useeffect "+ text)
        data.returnText(text);
    }, [text]);

    const handleChange = async (e: any) => {
        // console.log(data.max)
        // console.log(e.target.value)
        // console.log("target = "+e.target.value.toString())
        // console.log("curTarget = "+e.currentTarget.value.toString())
        // console.log(Number(e.target.value))
        // console.log(e.target.value.toString().length)

        if (e.target.value.toString().length <= data.max) {
            // console.log("textbefroe = "+text)
            data.num
                ? setText(Number(e.target.value))
                : setText(e.target.value.toString());

            setText(e.target.value.toString());
        }
        if (e.target.value.toString().length > data.max) {
            data.returnLimit(data.max);
        } else {
            data.returnLimit(e.target.value.toString().length);
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
    };

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
                // sx = {[{ height: height} ]}
                // focused
                inputProps={iprop}
                onKeyDown={
                    data.num
                        ? (evt) =>
                              ['e', 'E', '+', '-', '.'].includes(evt.key) &&
                              evt.preventDefault()
                        : (evt) => {}
                }
                onChange={(e) => handleChange(e)}
                // value ={data.num?Number(text):text}

                value={data.default ? data.default : ''}
                // defaultValue = {data.default}
            />
        </ThemeProvider>
    );
}
