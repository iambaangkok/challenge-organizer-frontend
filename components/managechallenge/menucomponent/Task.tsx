import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../../challengecreation/css/CreationPage.module.css';
import tStyle from '../css/Task.module.css';

type Task_ = {
    name: string;
    desc: string;
    start: string;
    end: string;
};
const t1 = {
    name: 'gae',
    desc: 'become the g',
    start: '050623',
    end: '050823',
};
export default function ManageTask(tasks: any) {
    const [ongoing, setOngoing] = useState<Task_[]>([]);
    const [future, setFuture] = useState<Task_[]>([]);
    const [finish, setFinish] = useState<Task_[]>([]);

    const spiltTask = (tasks: any) => {
        let currentTime = new Date();
        var o = [];
        var f = [];
        var fi = [];

        for (var t of tasks) {
            let end = new Date(t.endDate);
            let start = new Date(t.startDate);
            if (start <= currentTime && end > currentTime) o.push(t);
            if (start > currentTime) f.push(t);
            if (end <= currentTime) fi.push(t);
        }
        setOngoing(o)
        setFuture(f)
        setFinish(fi)
    };
    useEffect(()=>{
        spiltTask(tasks)
    },[tasks])

    const addTask = async (t: Task_) => {
        setOngoing([...ongoing, t]);
        await axios.post('add')
    };
    const delTask = async (t:Task_) =>{
        await axios.delete('del')
    }

    useEffect(() => {
        let currentTime = new Date();
        //send chal data
        axios.get('all task').then((resp) => {
            var o = [];
            var f = [];
            var fi = [];
            let end = new Date(t.endDate);
            let start = new Date(t.startDate);
            for (var t of resp.data) {
                if (start <= currentTime && end > currentTime) o.push(t);
                if (start > currentTime) f.push(t);
                if (end <= currentTime) fi.push(t);
            }
            setOngoing(o);
            setFuture(f);
            setFinish(fi);
        });
    }, []);
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
                            ongoing.map((t: Task_, index) => {
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
                            future.map((t: Task_, index) => {
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
                            finish.map((t: Task_, index) => {
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
