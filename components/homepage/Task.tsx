import Link from 'next/link';
import { TaskData } from '../../types/DataType';
import styles from './css/Task.module.scss';

export default function Task(data: TaskData) {
    return (
        // Each task routes to its own task page
        <Link
            id={data.challengeName}
            href={{
                pathname: '/challenge',
                query: {
                    id: data.taskId,
                    tab: 'tasks',
                },
            }}
            className="no-underline"
        >
            {/* Task Info */}
            <div className={styles['Task']}>
                <div className={styles['TaskInfo']}>
                    <div className={styles['TaskName'] + ' TextMedium'}>
                        {data.taskName}
                    </div>
                    <div className={styles['TaskDescription'] + ' S2Regular'}>
                        {data.challengeName}
                    </div>
                    <div className={styles['TaskDescription'] + ' S2Regular'}>
                        {data.dueDate}
                    </div>
                </div>
            </div>
        </Link>
    );
}
