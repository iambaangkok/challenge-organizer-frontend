import Head from 'next/head'
import Link from 'next/link';
import { Router } from 'next/router';
import ChallengeCard from '../components/homepage/ChallengeCard';
import Challenges from '../components/homepage/Challenges';
import Task from '../components/homepage/Task';
import NavBar from '../components/navbar/NavBar'
import styles from '../pages/index.module.css'

const testTaskData = {
  taskName: 'This is Task name',
  challengeName: 'This is Challenge name',
  dueDate: Date(),
  finished: true
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
      <body>
        {/* List of challenges */}
        {/* <div className='flex flex-col space-y-2'>
          <ChallengeCard {...testChallengeData}></ChallengeCard>
          <ChallengeCard {...testChallengeData}></ChallengeCard>
          <ChallengeCard {...testChallengeData}></ChallengeCard>
        </div> */}

        <Challenges></Challenges>

        <Task {...testTaskData}></Task>
      </body>


    </>
  );
}
