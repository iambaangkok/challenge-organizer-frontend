import styles from './css/TaskDashboard.module.css';
import { testTaskList } from '../../lib/taskList';
import Task from './Task';
import { useCallback, useEffect, useState } from 'react';
import { TaskData } from '../../types/DataType';
import axios from 'axios';

export default function TaskDashboard() {
    const [loading, setLoading] = useState<boolean>(false);
    const [taskList, setTaskList] = useState<TaskData[]>([]);
    const [displayName, setDisplayName] = useState<string>('');

    const fetchTaskList = useCallback(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3030/api/task${displayName}`)
            .then((resp) => {
                setTaskList(resp.data);
            })
            .catch((e) => {
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [displayName]);

    useEffect(() => {
        if (localStorage.getItem('displayName') !== null) {
            setDisplayName(`/${localStorage.getItem('displayName')}`);
        } else {
            setDisplayName(``);
        }
        fetchTaskList();
    }, [fetchTaskList]);

    return (
        <div className={styles.TaskDashboard + ' ShadowContainer'}>
            <div className="H1">Your Tasks</div>
            <div>
                <hr />
            </div>
            <div className={styles['TaskList']}>
                {taskList.map((task: TaskData, index) => {
                    return <Task key={index} {...task}></Task>;
                })}
            </div>
        </div>
    );
}
