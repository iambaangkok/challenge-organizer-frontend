import {TextField} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';


interface textdata{
    fieldname: string,
    helper: string
}



export default function TextField_(data: textdata){
    return(
        <TextField id="outlined-basic" label="" variant="outlined" />
    )
}