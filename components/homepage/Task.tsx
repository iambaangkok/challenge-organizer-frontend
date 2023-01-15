import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Link from 'next/link';
import styles from './css/Task.module.css'

interface taskData {
    taskId: string
    taskName: string
    challengeName: string
    dueDate: string
    finished: Boolean
}

export default function Task(data: taskData) {

    return (
        // Each task routes to its own task page
        <Link
            id={data.challengeName}
            href={{
                pathname: '/challenge',
                query: {
                    id: data.taskId,
                    tab: 'tasks'
                },
            }}
            className='no-underline'
        >
            {/* Task Info */}
            <div className={styles.Task}>
                <div className={styles.TaskInfo}>
                    <div className={styles.TaskName + ' TextMedium'}>{data.taskName}</div>
                    <div className={styles.ChallengeName + ' S2Regular'}>{data.challengeName}</div>
                    <div className={styles.DueDate + ' S2Regular'}>{data.dueDate}</div>
                </div>
            </div>

        </Link>




    )
}