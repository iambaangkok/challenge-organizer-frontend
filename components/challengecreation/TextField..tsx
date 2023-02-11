import {TextField} from '@mui/material';
import { alpha, createTheme, styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { Interface } from 'node:readline/promises';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#EA7000',
            contrastText: '#FFFFFF',
        },
    },
    components : {
        'MuiTextField' : {
            styleOverrides : {
                root : {
                    '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline' : {
                        borderColor: '#FA9C1D'
                    } , 
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline' : {
                        borderColor: '#EA7000'
                    },
                }
            }
        }
    }
})
const styles = {
    refont:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14
    }
}

interface textData{
    width: number
    height: number
    max: number
    multiline: Boolean
}



export default function TextField_(data:any){
    var fieldId  = ""
    var height = data.height
    if(data.multiline){
        fieldId = "outlined-multiline-flexible"
        height = height
    }else{
        fieldId = "outlined-basic"
    }



    const [text,setText] = React.useState<String>("");
    const handleChange = (e:any) =>{
        // console.log(data.max)
        // console.log(e.target.value)
        // console.log(e.target.value.toString())
        // console.log(e.target.value.toString().length)
        if(e.target.value.toString().length <= data.max){
            setText(e.target.value.toString())
           
        }
        data.returnText(text)
        if(e.target.value.toString().length>data.max){
            data.returnLimit(data.max)
        }else{
        data.returnLimit(e.target.value.toString().length)
        }
    };

    return(
        <ThemeProvider theme = {theme}>
            <TextField 
        id= "outlined-multiline-flexible"
        multiline ={data.multiline? true:false}
        maxRows = {4}
        label="" 
        variant="outlined" 
        fullWidth = {true}
        type = {data.num?"number":"any"}
        autoComplete='off'
        // sx = {[{ height: height} ]}
        // focused
        inputProps = {{style: {fontSize:14,fontFamily:'Inter',fontWeight:500,fontStyle:'normal'}}}
        onChange = {(e) => handleChange(e)}
        value ={text}
        
        />
        </ThemeProvider>
        
    )
}