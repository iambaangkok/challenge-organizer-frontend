import { Style } from '@mui/icons-material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchChallengeData } from '../../services/challenge.services';
import { TaskData } from '../../types/DataType';
import styles from '../challengecreation/css/CreationPage.module.css';
import tStyle from '../managechallenge/css/Task.module.css';
import { createTheme, TextField } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import DateSelector from '../challengecreation/AtomicComponent/DateSelector';
import { Dayjs } from 'dayjs';
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { ButtonTheme } from '../../theme/Button';
import Button from '@mui/material/Button';

const double = {
    width: 400,
    height: 40,
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#FA9C1D',
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

export default function Submissions() {
    const router = useRouter();
    const { challengeTitle, taskId } = router.query;

    const [desc, setDesc] = useState<string>('');
    const [selector, setSelector] = useState('');
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    const [acceptStart, setAcceptStart] = useState<boolean>(false);
    const [acceptEnd, setAcceptEnd] = useState<boolean>(false);

    const [ongoing, setOngoing] = useState<TaskData[]>([]);
    const [future, setFuture] = useState<TaskData[]>([]);
    const [finish, setFinish] = useState<TaskData[]>([]);

    // useEffect(()=>{
    //     spiltTask(tasks)
    // },[tasks])

    const addTask = () => {
        let j = {
            description: desc,
            score: selector,
            challengeTitle: challengeTitle as string,
            start: start,
            end: end,
        };
        console.log(j)
        axios
            .post('http://localhost:3030/api/task', j)
            .then((resp) => {
                console.log(resp);
                axios
                    .get(`http://localhost:3030/api/challenges/allTask/${challengeTitle}`, {
                        data: {
                            challengeTitle: challengeTitle,
                        },
                    })
                    .then((resp) => {
                        setOngoing(resp.data.onGoing);
                        setFuture(resp.data.future);
                        setFinish(resp.data.finish);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const delTask = (t: TaskData) => {
        let id = t.taskId;
        console.log('http://localhost:3030/api/task/' + id);
        axios
            .delete('http://localhost:3030/api/task/' + id)
            .then((resp) => {
                console.log(resp);
                axios
                    .get(`http://localhost:3030/api/challenges/allTask/${challengeTitle}`, {
                        data: {
                            challengeTitle: challengeTitle,
                        },
                    })
                    .then((resp) => {
                        setOngoing(resp.data.onGoing);
                        setFuture(resp.data.future);
                        setFinish(resp.data.finish);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
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

    useEffect(() => {}, [ongoing, finish, future]);

    useEffect(() => {
        console.log('fetch all task', challengeTitle);
        axios
            .get(`http://localhost:3030/api/challenges/allTask/${challengeTitle}`, {
                data: {
                    challengeTitle: challengeTitle,
                },
            })
            .then((resp) => {
                console.log('challengetitile = ', challengeTitle);
                console.log('resp= ', resp);
                setOngoing(resp.data.onGoing);
                setFuture(resp.data.future);
                setFinish(resp.data.finish);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [challengeTitle]);

    return (
        <div className="w-full">
            <div className="w-full pb-2">
                <div className={styles.cr_HeadText + 'pb-2 pt-4'}>
                    Submissions
                </div>

                <div className={tStyle.frame + ' w-full'}>
                    <div></div>
                    {/* table */}
                    <div className={tStyle.table + ' w-full'}>
                        <div className={tStyle.head}>
                            <div className={tStyle.text1}>#</div>
                            <div className={tStyle.headDesc}>Participant ID</div>
                            <div className={tStyle.text}>Name</div>
                            <div className={tStyle.text}>Submission</div>
                            <div className={tStyle.text2}>Status</div>
                            <div className={tStyle.text2}>Score</div>
                        </div>
                        {ongoing?.length > 0 &&
                            ongoing.map((t: TaskData, index) => {
                                return (
                                    <div key={index} className={tStyle.body}>
                                        <div className={tStyle.bodytext1}>
                                            {index + 1}
                                        </div>
                                        <div className={tStyle.desc}>
                                            {t.description}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.start?.slice(0, 10)}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.end?.slice(0, 10)}
                                        </div>
                                        <div>
                                            {/* <button>Edit</button> */}
                                            <button onClick={() => delTask(t)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
