import Head from 'next/head'
import ChallengeDashboard from '../components/homepage/ChallengeDashboard';
import Task from '../components/homepage/Task';
import TaskDashboard from '../components/homepage/TaskDashboard';
import TextField from '../components/challengecreation/TextField.';
import CreationPage from '../components/challengecreation/CreationPage';

const test = {
  fieldname: "aa",
  helper: "bb"
}

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
        {/* <div className = 'flex'>
        <ChallengeDashboard></ChallengeDashboard>

        <TaskDashboard></TaskDashboard> 

         </div> */}
      <div>
      <CreationPage></CreationPage>
      </div>
     
      </body>


    </>
  );
}
