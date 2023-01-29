import styles from './css/CreationPage.module.css'
import DateSelector from './DateSelector'
import TextField_ from './TextField.'
import { useState } from 'react'
import { Button, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Title = {
    width: 1200,
    height: 40,
    max: 50
}
const Desc1 = {
    width: 1200,
    height: 40,
    max: 400
}
const parti = {
    width: 400,
    height: 40,
    max: 6969
}
const double = {
    width: 400,
    height: 40
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#DB8D23',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Inter',
        fontWeightMedium: 500,
        fontSize: 14
    },
})


export default function CreationPage() {
    const [typeState, setTypeState] = useState<string>("")
    const [formatState, setFormatState] = useState<string>("      ")

    return(
        <div className = {styles.cr_Body}  >

            <div className = {styles.cr_Container}>

                <div className = {styles.cr_Challenges}>
                    <div className = 'ml-8'>
                        <p className = 'H1'>Create a New Challenge</p>
                    </div>
                    <div className = {styles.cr_line}></div>

                    {/* content */}

                    <div className = {styles.cr_NewBody}>
                        <div className = {styles.cr_MenuTab}>
                            <div className = {styles.cr_Box}> <div className ="S1Medium" >General Info</div></div>
                            <div className = {styles.cr_Box}> <div className ="S1Medium">Reward</div></div>
                            <div className = {styles.cr_Box}> <div className ="S1Medium" >Participant/Member</div></div>
                            <div className = {styles.cr_Box}> <div className ="S1Medium" >Task</div></div>
                        </div>
                        <div className ={styles.cr_InfoFrame}>
                            <div className = "align-middle" >
                                <div className = 'S1Medium' >Challenge Title</div>
                                <TextField_ {...Title}  ></TextField_>
                                <div className = "S1Medium text-SuccesDark" > counter</div>
                            </div>
                            <div>
                                <div className = 'S1Medium' >Description(Optional)</div>
                                <TextField_ {...Desc1}></TextField_>
                                <div className = 'S1Medium'> counter</div>
                            </div>

                            <div className = "flex flex-row gap-10">
                                    <div className = {styles.cr_DateInside}>
                                        <div className ='S1Medium' >Start Date</div>
                                        <DateSelector {...double}></DateSelector>

                                    </div>
                                    <div className = {styles.cr_DateInside}>
                                        <div className ='S1Medium' >End Date</div>
                                        <DateSelector {...double}></DateSelector>

                                    </div>
                                    
                            </div>
                            <div className = "flex flex-row gap-10">
                        
                                    <div className = {styles.cr_DateInside}>
                                        <div className ='S1Medium' >Type</div>
                                        <FormControl fullWidth>
                                            <ThemeProvider theme={theme}>
                                                <Select sx={[{
                                                    '.MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#FA9C1D',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#FA9C1D',
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#FA9C1D',
                                                    },
                                                },{ width: 262},{height: 40}]}
                                                value={typeState}
                                                onChange={(event: SelectChangeEvent) => {
                                                    setTypeState(event.target.value)
                                                }}
                                                > 
                                                <MenuItem value={'Single'}>Single</MenuItem>
                                                <MenuItem value={'Single69'}>Single69</MenuItem>
                                                <MenuItem value={'69'}>69</MenuItem>     
                                                </Select>
                                            </ThemeProvider>
                                        </FormControl>

                                    </div>
                                    <div className = {styles.cr_DateInside}>
                                        <div className ='S1Medium' >Format</div>
                                        <FormControl fullWidth>
                                            <ThemeProvider theme={theme}>   
                                                <Select sx={[{
                                                    '.MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#FA9C1D',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#FA9C1D',
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#FA9C1D',
                                                    },
                                                },{ width: 262},{height: 40}]}
                                                value={formatState}
                                                onChange={(event: SelectChangeEvent) => {
                                                    setFormatState(event.target.value)
                                                }}
                                                > 
                                                <MenuItem value={'Point Based'}>Point Based</MenuItem>
                                                <MenuItem value={'68'}>68</MenuItem>
                                                <MenuItem value={'69'}>69</MenuItem>     
                                                </Select>
                                            </ThemeProvider>
                                        </FormControl>

                                    </div>
                            </div>
                            <div>
                                <div className = 'S1Medium' >Participant Limit (0 for unlimited)</div>
                                <TextField_ {...parti}></TextField_>
                            </div>
                            <div>
                                <div className = 'S1Medium' >Challenge Banner </div>
                                <div className = "flex flex-row place-content-center ">
                                <div>placeholder</div>
                               
                                <Button variant='outlined' 
                                sx = {[{ width: 70},{height: 40}]}
                                >
                                    upload 
                                </Button>
                        
                                </div>
                                
                            </div>
                            {/* reward  */}
                            <div>
                                <div className = 'S1Medium' >Reward (Optional)</div>
                                <div>

                                </div>
                            </div>


                        </div>
                    

                    </div>
                </div>
                      
            </div>
                
                    




        </div>
    )

}