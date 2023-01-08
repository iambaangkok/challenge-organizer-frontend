import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Button, Grid, Stack } from "@mui/material";

import { Delete } from '@mui/icons-material'
import Link from 'next/link';
import ChallengeCard from '../components/homepage/ChallengeCard';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet" />
      </Head>
      <div>This is home page</div>
      <Link href='\login' className='no-underline'>
        <Button variant='contained'>
          Go to Login page
        </Button>
      </Link>

      <div className='my-10'></div>

      <ChallengeCard></ChallengeCard>
    </>
  );
}
