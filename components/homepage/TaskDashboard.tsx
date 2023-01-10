import styles from './css/TaskDashboard.module.css'
import { taskList } from '../../lib/taskList'
import Task from './Task'

export default function TaskDashboard() {

    return (
        <div className={styles.TaskDashboard + ' flex flex-col'}>
            <div className='H1'>Your Tasks</div>
            <div>
                <hr />
            </div>
            <div className={styles.TaskList + ' flex flex-col'}>
                {
                    taskList.map((task, index) => {
                        return <Task key={index} {...task}></Task>
                    })
                }
            </div>
        </div>
    )

}