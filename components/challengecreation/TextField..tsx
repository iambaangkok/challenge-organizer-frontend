import {TextField} from '@mui/material';
import { alpha, createTheme, styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { Interface } from 'node:readline/promises';

const theme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#DB8D23',
            contrastText: '#FFFFFF',
        },
    },
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

}



export default function TextField_(data:textData){
    return(
        <ThemeProvider theme = {theme}>
            <TextField 
        id="outlined-basic" 
        label="" 
        variant="outlined" 
        sx = {[{ width: data.width },
            {'.MuiOutlinedInput-notchedOutline': {
            borderColor: '#FA9C1D',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FA9C1D',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FA9C1D',
        },
        '&:hover fieldset': {
            borderColor: '#FFDDAE',
          }
        }]}
        InputProps= {{sx:{height:data.height}}}
        // focused
        inputProps = {{style: {fontSize:14,fontFamily:'Inter',fontWeight:500,fontStyle:'normal'}, maxlenth: data.max}}
        />
        </ThemeProvider>
        
    )
}