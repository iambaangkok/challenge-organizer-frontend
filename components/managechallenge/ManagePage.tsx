import styles from '../challengecreation/css/CreationPage.module.css';
import DateSelector from '../challengecreation/AtomicComponent/DateSelector';
import TextField_ from '../challengecreation/AtomicComponent/TextField.';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import axios from 'axios';
import Router from 'next/router';
import { ButtonTheme } from '../../theme/Button';
import { useEffect } from 'react';
import Collaborators from '../managechallenge/menucomponent/collaborators';
import router from 'next/router';
import { fetchChallengeData } from '../../services/challenge.services';
import { useRouter } from 'next/router';
import { UserData } from '../../types/DataType';

const Title = {
    width: 1200,
    height: 40,
    max: 50,
};
const Desc1 = {
    width: 1200,
    height: 40,
    max: 400,
    multiline: true,
};
const Parti = {
    width: 400,
    height: 40,
    max: 8,
    num: true,
};
const double = {
    width: 400,
    height: 40,
};
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
        fontSize: 14,
    },
});
const uploadTheme = createTheme({
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

export default function ManagePage() {
    const router = useRouter();
    // const [challengePageData, setChallengePageData] =
    //     useState<ChallengePageData>();
    const {challengeTitle} = router.query

    const [typeState, setTypeState] = useState<string>('');
    const [formatState, setFormatState] = useState<string>('');

    const [title, setTitle] = useState<String>('');
    const [titleLimit, setTitleLimit] = useState<Number>(0);
    const [desc, setDesc] = useState<String>('');
    const [descLimit, setDescLimit] = useState<Number>(0);

    const [parti, setParti] = useState<Number>();
    const [partiLimit, setPartiLimit] = useState<Number>(0);

    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    // const [host,setHost] = useState<String>();
    const [collabarotors,setCollaborators] = useState<UserData[]>([]);


    useEffect(() => {
        if (challengeTitle) {
            fetchChallengeData(challengeTitle as string)
            .then(resp=>{
                setTitle(resp.challengeTitle)
                setTitleLimit(resp.challengeTitle.toString().length);

                setTypeState(resp.type)
                setFormatState(resp.format)
                setDesc(resp.description)
                setDescLimit(resp.description.toString().length);

                setParti(resp.maxParticipants)
                setDate(dayjs(resp.startDate))
                setEnd(dayjs(resp.endDate))
                setCollaborators(resp.collaborators)
            })
  
        }
    }, [challengeTitle]);

    const handleCreate = () => {
        let j = {
            challengeTitle: title,
            description: desc,
            startDate: date,
            endDate: end,
            type: typeState,
            format: formatState,
            maxParticipants: Number(parti),
            numParticipants: 0,
            host: localStorage.getItem('displayName'),
            banner: file
            // banner: banner
        };
        console.log(j);
        axios
            .post('http://localhost:3030/api/challenges', j)
            .then((resp) => {
                localStorage.removeItem('saved');
                let title = resp.data.challengeTitle;
                Router.push('/challenge?challengeTitle=' + title);
            })
            .catch((err) => {
                console.log(err);
            });

        // location.reload()
    };

    //set state of them when load page
    const handleSave = () => {
        let j = {
            title: title,
            desc: desc,
            type: typeState,
            format: formatState,
            startDate: date,
            endDate: end,
            participant: parti,
            // banner:banner
            banner:file,
            fName: fileName
        };
        let send = JSON.stringify(j);
        localStorage.setItem('saved', send);
        //tolocalstorage
    };
    const handleUpload = (e:any) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    const handleRemove = (e:any) =>{
        setFile(null)
        setFileName("")
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.cr_Body}>
                <div className={styles.cr_Container}>
                    <div className={styles.cr_Challenges}>
                        <div className="ml-8">
                            <p className="H1">Manage Challenge</p>
                        </div>
                        <div className={styles.cr_line}></div>

                        {/* content */}

                        <div className={styles.cr_NewBody}>
                            {/* menu */}
                            <div className="flex gap-6">
                                <div className={styles.cr_MenuTab}>
                                    <div className={styles.cr_Box}>
                                        <div className="S1Medium">
                                            General Info
                                        </div>
                                    </div>
                                    <div className={styles.cr_Box}>
                                        <div className="S1Medium">Reward</div>
                                    </div>
                                    <div className={styles.cr_Box}>
                                        <div className="S1Medium">Participant/Member</div>
                                    </div>
                                    <div className={styles.cr_Box}>
                                        <div className="S1Medium">
                                            Collaborators
                                        </div>
                                    </div>
                                    <div className={styles.cr_Box}>
                                        <div className="S1Medium">Task</div>
                                    </div>
                                    <div className={styles.cr_Box}>
                                        <div className="S1Medium">Tabs</div>
                                    </div>
                                </div>

                                {/* body */}
                                <div className={styles.cr_InfoFrame}>
                                    {/* general info */}
                                    <div className="w-full py-2">
                                        <div
                                            className={
                                                styles.cr_HeadText + ' pb-2'
                                            }
                                        >
                                            Challenge Title{' '}
                                            <span className={styles.cr_star}>
                                                {' '}
                                                *{' '}
                                            </span>
                                        </div>
                                        <TextField_
                                            id={'ChallengeTitle'}
                                            {...Title}
                                            returnText={setTitle}
                                            returnLimit={setTitleLimit}
                                            default={title}
                                        ></TextField_>
                                        <div className="flex justify-end mr-1 pt-1">
                                            <div
                                                className={
                                                    styles.cr_SuccessText
                                                }
                                            >
                                                {`${titleLimit}/50`}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full pb-2">
                                        <div
                                            className={
                                                styles.cr_HeadText + ' pb-2'
                                            }
                                        >
                                            Description(Optional)
                                        </div>
                                        <TextField_
                                            title="Description"
                                            {...Desc1}
                                            returnText={setDesc}
                                            returnLimit={setDescLimit}
                                            default={desc}
                                        ></TextField_>
                                        <div className="flex justify-end mr-1 pt-1">
                                            <div
                                                className={
                                                    styles.cr_SuccessText
                                                }
                                            >
                                                {`${descLimit}/400`}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-10 pb-2">
                                        <div className={styles.cr_DateInside}>
                                            <div
                                                className={
                                                    styles.cr_HeadText + ' pb-2'
                                                }
                                            >
                                                Start Date
                                                <span
                                                    className={styles.cr_star}
                                                >
                                                    {' '}
                                                    *{' '}
                                                </span>
                                            </div>
                                            <DateSelector
                                                {...double}
                                                returnDate={setDate}
                                                default={date}
                                            ></DateSelector>
                                        </div>
                                        <div className={styles.cr_DateInside}>
                                            <div
                                                className={
                                                    styles.cr_HeadText + ' pb-2'
                                                }
                                            >
                                                End Date
                                                <span
                                                    className={styles.cr_star}
                                                >
                                                    {' '}
                                                    *{' '}
                                                </span>
                                            </div>
                                            <DateSelector
                                                {...double}
                                                returnDate={setEnd}
                                                default={end}
                                            >
                                                {' '}
                                            </DateSelector>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10 pb-2">
                                        <div className={styles.cr_DateInside}>
                                            <div
                                                className={
                                                    styles.cr_HeadText + ' pb-2'
                                                }
                                            >
                                                Type
                                                <span
                                                    className={styles.cr_star}
                                                >
                                                    {' '}
                                                    *{' '}
                                                </span>
                                            </div>
                                            <FormControl fullWidth>
                                                <ThemeProvider theme={theme}>
                                                    <Select
                                                        sx={[
                                                            {
                                                                '.MuiOutlinedInput-notchedOutline':
                                                                {
                                                                    borderColor:
                                                                        '#FA9C1D',
                                                                },
                                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                                {
                                                                    borderColor:
                                                                        '#FA9C1D',
                                                                },
                                                                '&:hover .MuiOutlinedInput-notchedOutline':
                                                                {
                                                                    borderColor:
                                                                        '#FA9C1D',
                                                                },
                                                            },
                                                            { width: 262 },
                                                        ]}
                                                        value={typeState}
                                                        onChange={(
                                                            event: SelectChangeEvent,
                                                        ) => {
                                                            setTypeState(
                                                                event.target
                                                                    .value,
                                                            );
                                                        }}
                                                    >
                                                        <MenuItem
                                                            value={'single'}
                                                        >
                                                            Single
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={'team'}
                                                        >
                                                            Team
                                                        </MenuItem>
                                                    </Select>
                                                </ThemeProvider>
                                            </FormControl>
                                        </div>
                                        <div className={styles.cr_DateInside}>
                                            <div
                                                className={
                                                    styles.cr_HeadText + ' pb-2'
                                                }
                                            >
                                                Format
                                                <span
                                                    className={styles.cr_star}
                                                >
                                                    {' '}
                                                    *{' '}
                                                </span>
                                            </div>
                                            <FormControl fullWidth>
                                                <ThemeProvider theme={theme}>
                                                    <Select
                                                        sx={[
                                                            {
                                                                '.MuiOutlinedInput-notchedOutline':
                                                                {
                                                                    borderColor:
                                                                        '#FA9C1D',
                                                                },
                                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                                {
                                                                    borderColor:
                                                                        '#FA9C1D',
                                                                },
                                                                '&:hover .MuiOutlinedInput-notchedOutline':
                                                                {
                                                                    borderColor:
                                                                        '#FA9C1D',
                                                                },
                                                            },
                                                            { width: 262 },
                                                        ]}
                                                        value={formatState}
                                                        onChange={(
                                                            event: SelectChangeEvent,
                                                        ) => {
                                                            setFormatState(
                                                                event.target
                                                                    .value,
                                                            );
                                                        }}
                                                    >
                                                        <MenuItem
                                                            value={
                                                                'point-based'
                                                            }
                                                        >
                                                            Point Based
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={
                                                                'elimination'
                                                            }
                                                        >
                                                            Elimination
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={
                                                                'double-elimination'
                                                            }
                                                        >
                                                            Double Elimination
                                                        </MenuItem>
                                                    </Select>
                                                </ThemeProvider>
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className="pb-2">
                                        <div
                                            className={
                                                styles.cr_HeadText + ' pb-2'
                                            }
                                        >
                                            Participant Limit (0 for unlimited)
                                            <span className={styles.cr_star}>
                                                {' '}
                                                *{' '}
                                            </span>
                                        </div>
                                        <TextField_
                                            {...Parti}
                                            returnText={setParti}
                                            returnLimit={setPartiLimit}
                                            default={parti}
                                        ></TextField_>
                                    </div>

                                    {/* Banner */}
                                    <div className="pb-2">
                                        <div
                                            className={
                                                styles.cr_HeadText + ' pb-2'
                                            }
                                        >
                                            Challenge Banner
                                        </div>
                                        <div className="flex flex-row ">
                                            <ThemeProvider theme={ButtonTheme}>
                                                <Button
                                                    variant="contained"
                                                    size="medium"
                                                    color="secondary"
                                                    component="label"
                                                    sx={[
                                                        { width: 70 },
                                                        { height: 40 },
                                                    ]}
                                                >
                                                    upload
                                                    <input

                                                        accept="image/*"
                                                        multiple
                                                        type="file"
                                                        onChange={handleUpload}
                                                    />

                                                </Button>
                                            </ThemeProvider>
                                            <div
                                                className={
                                                    styles.cr_fileText +
                                                    ' mt-2 pl-4'
                                                }
                                            >
                                                {fileName}
                                            </div>


                                        </div>
                                        {/* {file&& (
                                            <div>
                                                <img
                                                    alt="not found"
                                                    width={"250px"}
                                                    src={URL.createObjectURL(file)}
                                                />
                                                <br />

                                                <button onClick={() => setFile(null)}>Remove banner upload</button>
                                            </div>
                                        )} */}
                                    </div>
                                <Collaborators></Collaborators>   

                                </div>
                            </div>

                            {/* button */}
                            <div className={styles.cr_Buttonsession}>
                                {/* create */}
                                <div>
                                    <ThemeProvider theme={ButtonTheme}>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            onClick={handleCreate}
                                        >
                                            Edit
                                        </Button>
                                    </ThemeProvider>
                                </div>
                                {/* save */}
                                <div>
                                    <ThemeProvider theme={ButtonTheme}>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            color="secondary"
                                            onClick={handleSave}
                                        >
                                            save
                                        </Button>
                                    </ThemeProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
