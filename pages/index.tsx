import Head from 'next/head'
import ChallengeDashboard from '../components/homepage/ChallengeDashboard';
import Task from '../components/homepage/Task';
import TaskDashboard from '../components/homepage/TaskDashboard';


export default function Home() {

  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <div className='flex justify-center items-start space-x-2'>
        <ChallengeDashboard></ChallengeDashboard>
        <TaskDashboard></TaskDashboard>
      </div>
    </>
  );
}
