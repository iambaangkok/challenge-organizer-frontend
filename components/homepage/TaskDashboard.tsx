import styles from './css/TaskDashboard.module.css'
import { testTaskList } from '../../lib/taskList'
import Task from './Task'
import { useState } from 'react'

export default function TaskDashboard() {

    const [loading, setLoading] = useState(true)
    const [taskList, setTaskList] = useState(null)

    return (
        <div className={styles.TaskDashboard + ' flex flex-col ShadowContainer'}>
            <div className='H1'>Your Tasks</div>
            <div>
                <hr />
            </div>
            <div className={styles.TaskList + ' flex flex-col mt-2'}>
                {
                    testTaskList.map((task, index) => {
                        return <Task key={index} {...task}></Task>
                    })
                }
            </div>
        </div>
    )

}