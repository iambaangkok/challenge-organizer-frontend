import { useState } from 'react';
import styles from '../../challengecreation/css/CreationPage.module.css'

import tStyle from '../css/Task.module.css';

type Task_ = {
    name: string;
    desc: string;
    start: string;
    end: string;
};
const t1 = {
    name: "gae",
    desc:"become the g"
    ,start: "050623",
    end: "050823"
}
export default function ManageTask() {
    const [ongoing, setOngoing] = useState<Task_[]>([]);
    const ongAdd = (t:Task_) =>{
        setOngoing([...ongoing,t])
    }
    const ongDelete = (t: Task_) => {
        setOngoing(ongoing.filter((e) => e !== t));
        //api
    };
    const [future, setFuture] = useState<Task_[]>([]);
    const fDelete = (t: Task_) => {
        setFuture(future.filter((e) => e !== t));
        //api
    };
    const [finish, setFinish] = useState<Task_[]>([]);
    const finishDelete = (t: Task_) => {
        setFinish(finish.filter((e) => e !== t));
        //api
    };
    return (
        <div className = "w-full">
            <div className="w-full pb-2">
                <div className={styles.cr_HeadText + 'pb-2'}>Ongoing Task</div>
                <button onClick = {()=>ongAdd(t1)}>add</button>
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
                                            <button>Hide</button>
                                            <button>Edit</button>
                                            <button
                                                onClick={() => ongDelete(t)}
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
                                            <button>Hide</button>
                                            <button>Edit</button>
                                            <button onClick={() => fDelete(t)}>
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
                                            <button>Hide</button>
                                            <button>Edit</button>
                                            <button
                                                onClick={() => finishDelete(t)}
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
