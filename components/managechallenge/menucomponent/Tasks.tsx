import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchChallengeData } from '../../../services/challenge.services';
import { TaskData } from '../../../types/DataType';
import styles from '../../challengecreation/css/CreationPage.module.css';
import tStyle from '../css/Task.module.css';



export default function Tasks() {
    const router = useRouter();
    const { challengeTitle } = router.query;
    const [tasks,setTasks] = useState<TaskData[]>([]);
    const [ongoing, setOngoing] = useState<TaskData[]>([]);
    const [future, setFuture] = useState<TaskData[]>([]);
    const [finish, setFinish] = useState<TaskData[]>([]);

    
    // useEffect(()=>{
    //     spiltTask(tasks)
    // },[tasks])

    const addTask = async (t: TaskData) => {
        setOngoing([...ongoing, t]);
        await axios.post('add')
    };
    const delTask = async (t:TaskData) =>{
        await axios.delete('del')
    }

    useEffect(() => {
        fetchChallengeData(challengeTitle as string).then(
            (resp) => {
                setTasks(resp.tasks);
            },
        );
    }, [challengeTitle]);

    return (
        <div className="w-full">
            <div className="w-full pb-2">
                <div className={styles.cr_HeadText + 'pb-2'}>Ongoing Task</div>
             
                <div className={tStyle.frame + ' w-full'}>
                    <div></div>
                    {/* table */}
                    <div className={tStyle.table + ' w-full'}>
                        <div className={tStyle.head}>
                            <div className={tStyle.text}>#</div>
                            <div className={tStyle.text}>Task Name</div>
                            <div className={tStyle.text}>Description</div>
                            <div className={tStyle.text}>Start Date</div>
                            <div className={tStyle.text}>End Date</div>
                            <div className={tStyle.text}>Action</div>
                        </div>
                        {ongoing.length > 0 &&
                            ongoing.map((t: TaskData, index) => {
                                return (
                                    <div key={index} className={tStyle.body}>
                                        <div className={tStyle.bodytext}>
                                            {index + 1}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.name}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.desc}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.start}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.end}
                                        </div>
                                        <div>
                                            <button>Edit</button>
                                            <button
                                                onClick={() => delTask(t)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                {/* future */}
                <div className={styles.cr_HeadText + 'pb-2'}>Future Task</div>
                <div className={tStyle.frame + ' w-full'}>
                    <div></div>
                    {/* table */}
                    <div className={tStyle.table + ' w-full'}>
                        <div className={tStyle.head}>
                            <div className={tStyle.text}>#</div>
                            <div className={tStyle.text}>Task Name</div>
                            <div className={tStyle.text}>Description</div>
                            <div className={tStyle.text}>Start Date</div>
                            <div className={tStyle.text}>End Date</div>
                            <div className={tStyle.text}>Action</div>
                        </div>
                        {future.length > 0 &&
                            future.map((t: TaskData, index) => {
                                return (
                                    <div key={index} className={tStyle.body}>
                                        <div className={tStyle.bodytext}>
                                            {index + 1}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.name}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.desc}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.start}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.end}
                                        </div>
                                        <div>
                                            <button>Edit</button>
                                            <button onClick={() => delTask(t)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                {/* finish */}
                <div className={styles.cr_HeadText + 'pb-2'}>Finished Task</div>
                <div className={tStyle.frame + ' w-full'}>
                    <div></div>
                    {/* table */}
                    <div className={tStyle.table + ' w-full'}>
                        <div className={tStyle.head}>
                            <div className={tStyle.text}>#</div>
                            <div className={tStyle.text}>Task Name</div>
                            <div className={tStyle.text}>Description</div>
                            <div className={tStyle.text}>Start Date</div>
                            <div className={tStyle.text}>End Date</div>
                            <div className={tStyle.text}>Action</div>
                        </div>
                        {finish.length > 0 &&
                            finish.map((t: TaskData, index) => {
                                return (
                                    <div key={index} className={tStyle.body}>
                                        <div className={tStyle.bodytext}>
                                            {index + 1}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.name}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.desc}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.start}
                                        </div>
                                        <div className={tStyle.bodytext}>
                                            {t.end}
                                        </div>
                                        <div>
                                            <button>Edit</button>
                                            <button
                                                onClick={() => delTask(t)}
                                            >
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
