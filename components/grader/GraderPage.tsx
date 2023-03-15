import styles from '../challengecreation/css/CreationPage.module.css';
import DateSelector from '../challengecreation/AtomicComponent/DateSelector';
import TextField_ from '../challengecreation/AtomicComponent/TextField.';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
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
import Tasks from '../managechallenge/menucomponent/Tasks';
import Swal from 'sweetalert2';
import { Tty } from '@mui/icons-material';
import Submissions from './Submissions';

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

export default function GraderPage() {
    const router = useRouter();
    // const [challengePageData, setChallengePageData] =
    //     useState<ChallengePageData>();
    const { challengeTitle } = router.query;

    const [typeState, setTypeState] = useState<string | undefined>('');
    const [formatState, setFormatState] = useState<string | undefined>('');

    const [title, setTitle] = useState<String>('');
    const [titleLimit, setTitleLimit] = useState<Number>(0);
    const [desc, setDesc] = useState<String>('');
    const [descLimit, setDescLimit] = useState<Number>(0);

    const [parti, setParti] = useState<Number>();
    const [partiLimit, setPartiLimit] = useState<Number>(0);

    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    // const [host,setHost] = useState<String>();
    const [collabarotors, setCollaborators] = useState<UserData[]>([]);

    const [acceptStart, setAcceptStart] = useState<boolean>(false);
    const [acceptEnd, setAcceptEnd] = useState<boolean>(false);

    useEffect(() => {
        if (challengeTitle) {
            fetchChallengeData(challengeTitle as string).then((resp) => {
                setTitle(resp.challengeTitle);
                setTitleLimit(resp.challengeTitle?.toString().length);

                setTypeState(resp.type);
                setFormatState(resp.format);
                setDesc(resp.description);
                setDescLimit(resp.description.toString().length);

                setParti(resp.maxParticipants);
                setDate(dayjs(resp.startDate));
                setEnd(dayjs(resp.endDate));
                setCollaborators(resp.collaborators);
            });
        }
    }, [challengeTitle]);

    const handleEdit = () => {
        let j = {
            challengeTitle: title,
            description: desc,
            startDate: date,
            endDate: end,
            type: typeState,
            format: formatState,
            maxParticipants: Number(parti),
            //banner
        };
        console.log(j);
        let tt = challengeTitle as string;
        axios
            .put('http://localhost:3030/api/challenges' + tt, j)
            .then((resp) => {
                Swal.fire('Edit complete', '', 'success');
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleDel = () => {
        Swal.fire({
            title: 'Do you want to delete this challenge?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'No',
            denyButtonText: 'Yes',
            // customClass: {
            //   actions: 'my-actions',
            //   cancelButton: 'order-1 right-gap',
            //   confirmButton: 'order-2',
            //   denyButton: 'order-3',
            // }
        }).then((result) => {
            if (result.isConfirmed) {
            } else if (result.isDenied) {
                Swal.fire('Challenge Delete', '', 'info');
                let tt = challengeTitle as string;
                axios
                    .delete('http://localhost:3030/api/challenges/' + tt)
                    .then((resp) => {
                        console.log(resp);
                        Router.push('/home');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
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
            banner: file,
            fName: fileName,
        };
        let send = JSON.stringify(j);
        localStorage.setItem('saved', send);
        //tolocalstorage
    };

    const handleUpload = (e: any) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const handleRemove = (e: any) => {
        setFile(null);
        setFileName('');
    };

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
                                {/* body */}
                                <div className={styles.cr_InfoFrame}>
                                    {/* general info */}
                                    <Submissions />
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
                                            onClick={handleEdit}
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
                                            onClick={handleDel}
                                        >
                                            delete challenge
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
