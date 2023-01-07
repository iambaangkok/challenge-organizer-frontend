import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Button, Grid, Stack } from "@mui/material";

import { Delete } from '@mui/icons-material'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div>This is home page</div>
      <Link href='\login' className='no-underline'>
        <Button variant='contained'>
          Go to Login page
        </Button>
      </Link>
    </>
  );
}
