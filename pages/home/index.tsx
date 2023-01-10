import Head from 'next/head'
import ChallengeDashboard from '../../components/homepage/ChallengeDashboard';
import Task from '../../components/homepage/Task';
import { createTheme } from '@mui/material/styles';
const testTaskData = {
  taskName: 'This is Task name',
  challengeName: 'This is Challenge name',
  dueDate: Date(),
  finished: true
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

        <ChallengeDashboard></ChallengeDashboard>

        <Task {...testTaskData}></Task>
      </body>


    </>
  );
}
