import Link from 'next/link';
import { ChallengeData, TaskData } from '../../types/DataType';
import styles from './css/Task.module.scss';

export default function Task(data: TaskData) {
    const challenge: ChallengeData = data.hasChallenges;

    var startDate = new Date(data.start);
    var endDate = new Date(data.end);

    return (
        // Each task routes to its own task page
        <Link
            id={challenge ? challenge.challengeTitle : ''}
            href={{
                pathname: '/submit',
                query: {
                    taskId : data.taskId ,
                    taskName : data.description ,
                    challengeTitle : challenge ? challenge.challengeTitle : ''
                },
            }}
            className="no-underline"
        >
            {/* Task Info */}
            <div className={styles['Task']}>
                <div className={styles['TaskInfo']}>
                    <div className={styles['TaskName'] + ' TextMedium'}>
                        {data.description}
                    </div>
                    <div className={styles['TaskDescription'] + ' S2Regular'}>
                        {challenge ? challenge.challengeTitle : ''}
                    </div>

                    {startDate.toLocaleDateString() ===
                    endDate.toLocaleDateString() ? (
                        <div
                            className={styles['TaskDescription'] + ' S2Regular'}
                        >
                            {startDate.toLocaleDateString() +
                                ' ' +
                                startDate.toLocaleTimeString()}{' '}
                            - {endDate.toLocaleTimeString()}
                        </div>
                    ) : (
                        <div
                            className={styles['TaskDescription'] + ' S2Regular'}
                        >
                            {startDate.toLocaleString() +
                                ' - ' +
                                endDate.toLocaleString()}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
