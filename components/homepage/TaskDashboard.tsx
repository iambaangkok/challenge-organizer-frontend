import styles from './css/TaskDashboard.module.css';
import { testTaskList } from '../../lib/taskList';
import Task from './Task';
import { useState } from 'react';
import { TaskData } from '../../types/DataType';

export default function TaskDashboard() {
    const [loading, setLoading] = useState(true);
    const [taskList, setTaskList] = useState<TaskData>();

    return (
        <div className={styles.TaskDashboard + ' ShadowContainer'}>
            <div className="H1">Your Tasks</div>
            <div>
                <hr />
            </div>
            <div className={styles.TaskList}>
                {testTaskList.map((task: TaskData, index) => {
                    return <Task key={index} {...task}></Task>;
                })}
            </div>
        </div>
    );
}
