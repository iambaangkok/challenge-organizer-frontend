import styles from './css/CreationPage.module.css';
import DateSelector from './AtomicComponent/DateSelector';
import TextField_ from './AtomicComponent/TextField.';
import { useState } from 'react';
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ParticipantList from './AtomicComponent/ParticipantList';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import GeneralInfo from './MenuComponents/GeneralInfo';
import axios from 'axios';
import Router from 'next/router';
import { ButtonTheme } from '../../theme/Button';
import { useEffect } from 'react';

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

export default function CreationPage() {
    const [typeState, setTypeState] = useState<string>('');
    const [formatState, setFormatState] = useState<string>('');

    const [title, setTitle] = useState<String>('');
    const [titleLimit, setTitleLimit] = useState<Number>(0);
    const [desc, setDesc] = useState<String>('');
    const [descLimit, setDescLimit] = useState<Number>(0);

    const [parti, setParti] = useState<Number>();
    const [partiLimit, setPartiLimit] = useState<Number>(0);

    const [banner, setBanner] = useState<File>();

    const [date, setDate] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    // const [host,setHost] = useState<String>();

    useEffect(() => {
        const savedLS = localStorage.getItem('saved');
        if (savedLS != null) {
            let saved = JSON.parse(savedLS);
            if (saved) {
                console.log(saved);
                // console.log("title bf "+ title)
                // console.log("saved title bf "+ saved.title)
                setTitle(saved.title);
                setTitleLimit(saved.title.toString().length);
                // console.log("title af "+ title)
                // console.log("saved title af "+ saved.title)
                setDesc(saved.desc);
                setDescLimit(saved.desc.toString().length);

                setTypeState(saved.type);
                setFormatState(saved.format);
                setParti(saved.participant);
                // console.log(saved.startDate)
                // console.log(saved.endDate)
                setDate(dayjs(saved.startDate));
                setEnd(dayjs(saved.endDate));
            }
        }
    }, []);

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
            // banner: banner
        };
        console.log(j);
        if (
            title.trim() == '' ||
            date === null ||
            end === null ||
            formatState === '' ||
            typeState === '' ||
            Number.isNaN(Number(parti))
        ) {
            alert('Please make sure to fill out all the required fields before submitting.');
        } else if (date?.diff(end) > 0) {
            alert('The date input provided is invalid. Please re-enter the date input');
        } else {
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
        }

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
        };
        let send = JSON.stringify(j);
        localStorage.setItem('saved', send);
        //tolocalstorage
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.cr_Body}>
                <div className={styles.cr_Container}>
                    <div className={styles.cr_Challenges}>
                        <div className="ml-8">
                            <p className="H1">Create a New Challenge</p>
                        </div>
                        <div className={styles.cr_line}></div>

                        {/* content */}

                        <div className={styles.cr_NewBody}>
                            {/* menu */}
                            <div className="flex justify-center gap-6">
                                {/* body */}
                                <div className={styles.cr_InfoFrame}>
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
                                            />
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
                                        <div className="flex flex-row place-content-center ">
                                            <div
                                                className={
                                                    styles.cr_fileText +
                                                    ' my-2 pr-4'
                                                }
                                            >
                                                placeholder.jpg
                                            </div>

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
                                                        hidden
                                                        accept="image/*"
                                                        multiple
                                                        type="file"
                                                    />
                                                </Button>
                                            </ThemeProvider>
                                        </div>
                                    </div>
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
                                            create challenge
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
