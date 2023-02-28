import Head from 'next/head';
import ChallengeDashboard from '../../components/homepage/ChallengeDashboard';
import TaskDashboard from '../../components/homepage/TaskDashboard';
import styles from './css/index.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles['Container']}>
                <ChallengeDashboard></ChallengeDashboard>
                <TaskDashboard></TaskDashboard>
            </div>
        </>
    );
}
