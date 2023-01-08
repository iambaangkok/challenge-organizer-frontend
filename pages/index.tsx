import Head from 'next/head'
import ChallengeCard from '../components/homepage/ChallengeCard';
import Task from '../components/homepage/Task';

const testTaskData = {
  taskName: 'ABA',
  challengeName: 'SUCKDICK',
  dueDate: Date(),
  finished: false
}

const testChallengeData = {
  challengeName: 'This is Challange Name',
  type: 'Single',
  format: 'Tournament',
  description: 'This is Challenge description',
  date: '11 Jan - 22 Feb',
  numParticipants: 20,
  maxParticipants: 30,
  rating: 3.8,
  joined: true,
  closed: false
}

export default function Home() {
  
  return (
    <>
      <Head>
        <title>RIVALs</title>
      </Head>

      {/* List of challenges */}
      <div className='flex flex-col space-y-2'>
        <ChallengeCard {...testChallengeData}></ChallengeCard>
        <ChallengeCard {...testChallengeData}></ChallengeCard>
        <ChallengeCard {...testChallengeData}></ChallengeCard>
      </div>
      
      <Task {...testTaskData}></Task>

    </>
  );
}
