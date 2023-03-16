import { Style } from '@mui/icons-material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchChallengeData } from '../../services/challenge.services';
import { SubmissionData, TaskData } from '../../types/DataType';
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
    const [tt,setTT] = useState("");
    const [tid,setTid] = useState<Number>();

    const [desc, setDesc] = useState<string>('');
    const [selector, setSelector] = useState('');
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);

    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState<string | Blob | undefined>();

    const [submissions, setSubmissions] = useState<SubmissionData[]>([]);

    // useEffect(()=>{
    //     spiltTask(tasks)
    // },[tasks])

    // useEffect(() => {}, [submissions]);

    // useEffect(() => {
    //     // console.log('fetch submissions tt', challengeTitle);
    //     // console.log('fetch submissions', taskId);
    //     console.log(tt)
    //     console.log(tid)
    //     axios
    //         .get(`http://localhost:3030/api/submissions/bytaskId`, {
    //             data: {
    //                 taskId: tid,
    //             },
    //         })
    //         .then((resp) => {
    //             console.log('resp= ', resp);
    //             setSubmissions(resp.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // },[tid]);
    
    useEffect(()=>{
        setTT(challengeTitle as string)
        setTid(Number(taskId as string))
    },[challengeTitle, taskId])

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
                            <div className={tStyle.text}>Participant ID</div>
                            <div className={tStyle.text}>Name</div>
                            <div className={tStyle.text}>Submission</div>
                            <div className={tStyle.text}>Status</div>
                            <div className={tStyle.text2}>Score</div>
                        </div>
                        {submissions?.length > 0 &&
                            submissions.map((s: SubmissionData, index) => {
                                return (
                                    <div key={index} className={tStyle.body}>
                                        <div className={tStyle.bodytext1}>
                                            {index + 1}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {s.hasSubmit.userId}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {s.hasSubmit.displayName}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {s.file?.path}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {s.score != null &&
                                                s.score != undefined}
                                        </div>
                                        <div>
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
                                                        ]}
                                                        value={selector}
                                                        onChange={(
                                                            event: SelectChangeEvent,
                                                        ) => {
                                                            setSelector(
                                                                event.target
                                                                    .value,
                                                            );
                                                        }}
                                                    >
                                                        <MenuItem value={'1'}>
                                                            1
                                                        </MenuItem>
                                                        <MenuItem value={'2'}>
                                                            2
                                                        </MenuItem>
                                                        <MenuItem value={'3'}>
                                                            3
                                                        </MenuItem>
                                                        <MenuItem value={'4'}>
                                                            4
                                                        </MenuItem>
                                                        <MenuItem value={'5'}>
                                                            5
                                                        </MenuItem>
                                                        <MenuItem value={'6'}>
                                                            6
                                                        </MenuItem>
                                                        <MenuItem value={'7'}>
                                                            7
                                                        </MenuItem>
                                                        <MenuItem value={'8'}>
                                                            8
                                                        </MenuItem>
                                                        <MenuItem value={'9'}>
                                                            9
                                                        </MenuItem>
                                                        <MenuItem value={'10'}>
                                                            10
                                                        </MenuItem>
                                                    </Select>
                                                </ThemeProvider>
                                            </FormControl>
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
