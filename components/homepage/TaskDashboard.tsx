import styles from './css/TaskDashboard.module.css'
import {taskList} from '../../lib/taskList'
import Task from './Task'

export default function TaskDashboard() {

    return (
        <div>
            <div className = 'H1'>Your Tasks</div>
            <hr/>
            <div className = 'flex flex-col space-y-4'>
                {
                    taskList.map((task , index) => {
                        return <Task key={index} {...task}></Task>
                    })
                }
            </div>

        </div>
    )

}