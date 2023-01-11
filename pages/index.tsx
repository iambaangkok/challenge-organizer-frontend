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
      <body>
        {/* List of challenges */}
        {/* <div className='flex flex-col space-y-2'>
          <ChallengeCard {...testChallengeData}></ChallengeCard>
          <ChallengeCard {...testChallengeData}></ChallengeCard>
          <ChallengeCard {...testChallengeData}></ChallengeCard>
        </div> */}
        <div className = 'flex'>
        <ChallengeDashboard></ChallengeDashboard>

        <TaskDashboard></TaskDashboard>

        </div>
      </body>


    </>
  );
}
