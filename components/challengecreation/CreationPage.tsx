import styles from './css/CreationPage.module.css'
import DateSelector from './DateSelector'
import TextField_ from './TextField.'
import { useState } from 'react'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ParticipantList from './ParticipantList'
import { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
const Title = {
    width: 1200,
    height: 40,
    max: 50,
}
const Desc1 = {
    width: 1200,
    height: 40,
    max: 400,
    multiline: true
}
const parti = {
    width: 400,
    height: 40,
    max: 66666,
    num: true
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
    const [typeState, setTypeState] = useState<string>("");
    const [formatState, setFormatState] = useState<string>("");

    const [title, setTitle] = useState<String>();
    const [titleLimit, setTitleLimit] = useState<Number>(0);
    const [desc, setDesc] = useState<String>("");
    const [descLimit, setDescLimit] = useState<Number>(0);

    const [parti, setParti] = useState<String>("");


    // const [banner, setBanner] = useState<File>();


    const [date, setDate] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);

    const handleCreate=() =>{

        let j = {
        title: title,
        desc: desc,
        type: typeState, 
        format: formatState,
        startDate: date,
        endDate: end,
        participant: parti,
        // banner:banner
        }
        let send = JSON.stringify(j)
        //axios
        location.reload()
    }


    //set state of them when load page
    const handleSave=() =>{

        let j = {
        title: title,
        desc: desc,
        type: typeState, 
        format: formatState,
        startDate: date,
        endDate: end,
        participant: parti,
        // banner:banner
        }
        let send = JSON.stringify(j)
        //tolocalstorage
    }


    return (
        <div className={styles.cr_Body}  >

            <div className={styles.cr_Container}>

                <div className={styles.cr_Challenges}>
                    <div className='ml-8'>
                        <p className='H1'>Create a New Challenge</p>
                    </div>
                    <div className={styles.cr_line}></div>

                    {/* content */}

                    <div className={styles.cr_NewBody}>
                        <div className={styles.cr_MenuTab}>
                            <div className={styles.cr_Box}> <div className="S1Medium" >General Info</div></div>
                            <div className={styles.cr_Box}> <div className="S1Medium">Reward</div></div>
                            <div className={styles.cr_Box}> <div className="S1Medium" >Collaborators</div></div>
                        </div>
                        <div className={styles.cr_InfoFrame}>
                            <div className="w-full py-2">
                                <div className={styles.cr_HeadText + ' pb-2'} >Challenge Title <span className={styles.cr_star}> * </span></div>
                                <TextField_  {...Title} returnText={setTitle} returnLimit={setTitleLimit}  ></TextField_>
                                <div className="flex justify-end mr-1 pt-1">
                                    <div className={styles.cr_SuccessText}>
                                        {titleLimit}/50
                                    </div>
                                </div>
                            </div>
                            <div className="w-full pb-2">
                                <div className={styles.cr_HeadText + ' pb-2'} >Description(Optional)</div>
                                <TextField_ {...Desc1} returnText={setDesc} returnLimit={setDescLimit}></TextField_>
                                <div className="flex justify-end mr-1 pt-1" >
                                    <div className={styles.cr_SuccessText}>
                                        {descLimit}/400
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row gap-10 pb-2">
                                <div className={styles.cr_DateInside}>
                                    <div className={styles.cr_HeadText + ' pb-2'} >Start Date<span className={styles.cr_star}> * </span></div>
                                    <DateSelector {...double} returnDate={setDate} ></DateSelector>

                                </div>
                                <div className={styles.cr_DateInside}>
                                    <div className={styles.cr_HeadText + ' pb-2'} >End Date<span className={styles.cr_star}> * </span></div>
                                    <DateSelector {...double} returnDate={setEnd}> </DateSelector>

                                </div>

                            </div>
                            <div className="flex flex-row gap-10 pb-2">

                                <div className={styles.cr_DateInside}>
                                    <div className={styles.cr_HeadText + ' pb-2'} >Type<span className={styles.cr_star}> * </span></div>
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
                                            }, { width: 262 }]}
                                                value={typeState}
                                                onChange={(event: SelectChangeEvent) => {
                                                    setTypeState(event.target.value)
                                                }}
                                            >
                                                <MenuItem value={'Single'}>Single</MenuItem>
                                                <MenuItem value={'Single69'}>Team</MenuItem>
                                            </Select>
                                        </ThemeProvider>
                                    </FormControl>

                                </div>
                                <div className={styles.cr_DateInside}>
                                    <div className={styles.cr_HeadText + ' pb-2'} >Format<span className={styles.cr_star}> * </span></div>
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
                                            }, { width: 262 }]}
                                                value={formatState}
                                                onChange={(event: SelectChangeEvent) => {
                                                    setFormatState(event.target.value)
                                                }}
                                            >
                                                <MenuItem value={'point'}>Point Based</MenuItem>
                                                <MenuItem value={'elim'}>Elimination</MenuItem>
                                                <MenuItem value={'double'}>Double Elimination</MenuItem>
                                            </Select>
                                        </ThemeProvider>
                                    </FormControl>

                                </div>
                            </div>

                            {/* Limit */}
                            <div className='pb-2'>
                                <div className={styles.cr_HeadText + ' pb-2'} >Participant Limit (0 for unlimited)<span className={styles.cr_star}> * </span></div>
                                <TextField_ {...parti} returnText={setParti}></TextField_>
                            </div>

                            {/* Banner */}
                            <div className='pb-2'>
                                <div className={styles.cr_HeadText + ' pb-2'} >Challenge Banner </div>
                                <div className="flex flex-row place-content-center ">
                                    <div className={styles.cr_fileText + ' my-2 pr-4' }>placeholder.jpg </div>

                                    <Button variant='outlined' component="label"
                                        sx={[{ width: 70 }, { height: 40 }]}
                                    >
                                        upload
                                        <input hidden accept="image/*" multiple type="file" />

                                    </Button>

                                </div>

                            </div>
                            {/* button */}

                            <div className={styles.cr_Buttonsession}>

                                {/* create */}
                                <div>
                                    <Button variant='outlined'
                                    onClick = {handleCreate}>
                                        create challenge
                                    </Button>
                                </div>
                                {/* save */}
                                <div>
                                    <Button variant='outlined'
                                    onClick = {handleSave}
                                    >
                                        save
                                        
                                    </Button>
                                </div>

                            </div>





                        </div>



                    </div>

                </div>


            </div>






        </div>
    )

}