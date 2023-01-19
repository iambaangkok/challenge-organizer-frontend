import { Skeleton } from '@mui/material';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Head from 'next/head'
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import ChallengeDashboard from '../../components/homepage/ChallengeDashboard';
import TaskDashboard from '../../components/homepage/TaskDashboard';
import { WhoAmIResponse } from '../api/whoAmI';


export default function Home() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='flex justify-center items-start space-x-4 mt-6'>
        <ChallengeDashboard></ChallengeDashboard>
        <TaskDashboard></TaskDashboard>
      </div>
    </>
  );
}
