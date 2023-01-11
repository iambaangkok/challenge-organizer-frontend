import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import styles from './css/Task.module.css'

interface taskData {
    taskName: string
    challengeName: string
    dueDate: string
    finished: Boolean
}

// const data = {
//     taskName: 'This is Task Name',
//     challengeName: 'This is Challenge Name',
//     dueDate: Date(),
//     finished: true
// }

// const taskName = 'This is Task Name'
// const challengeName = 'This is Challenge Name'
// const dueDate = '21 Jan - 13 Feb'
// const finished = true

export default function Task(data: taskData) {
    return (
        <div className={styles.Task}>
            <div className={styles.TaskInfo}>
                <div className={styles.TaskName + ' TextMedium'}>{data.taskName}</div>
                <div className={styles.ChallengeName + ' S2Regular'}>{data.challengeName}</div>
                <div className={styles.DueDate + ' S2Regular'}>{data.dueDate}</div>
            </div>
        </div>
    )
}