import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import styles from './Task.module.css'

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
            <div>
                {data.finished &&
                    <CheckBoxIcon className={styles.Checkbox}></CheckBoxIcon>
                }
                {!data.finished &&
                    <CheckBoxOutlineBlankIcon className={styles.Checkbox}></CheckBoxOutlineBlankIcon>
                }
            </div>
            <div className={styles.TaskInfo}>
                <div className={styles.TaskName}>{data.taskName}</div>
                <div className={styles.ChallengeName}>{data.challengeName}</div>
                <div className={styles.DueDate}>{data.dueDate}</div>
            </div>
        </div>
    )
}