import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Button, Grid, Stack } from "@mui/material";

import { Delete } from '@mui/icons-material'
import Link from 'next/link';
import TF from'../components/challengecreation/TextField'

const inter = Inter({ subsets: ['latin'] })
const testdata = {
    fieldname: "challengename",
    helper: "help"
    
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div>This is home page</div>
      <div><TF {...testdata}></TF></div>
      <Link href='\login' className='no-underline'>
      
        <Button variant='contained'>
          Go to Login page
        </Button>
      </Link>
    </>
  );
}
