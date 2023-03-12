import { CircularProgress } from '@mui/material';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { WhoAmIResponse } from '../pages/api/whoAmI';
import styles from './Layout.module.scss';

import Navbar from './navbar/NavBar';

export default function Layout({ children }: any) {
    const [fullName, setFullName] = useState('');
    const [cmuAccount, setCmuAccount] = useState('');
    const [studentId, setStudentId] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    // state
    const [loading, setLoading] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const router = useRouter();

    const getInfo = () => {
        //All cookies that belong to the current url will be sent with the request automatically
        //so we don't have to attach token to the request
        //You can view token (stored in cookies storage) in browser devtools (F12). Open tab "Application" -> "Cookies"
        setLoading(true);
        setLoggedIn(false);
        axios
            .get<{}, AxiosResponse<WhoAmIResponse>, {}>('/api/whoAmI')
            .then(async (response) => {
                if (response.data.ok && localStorage.getItem('displayName')) {
                    // console.log(response.data)
                    setFullName(
                        response.data.firstName + ' ' + response.data.lastName,
                    );
                    setCmuAccount(response.data.cmuAccount);
                    setStudentId(response.data.studentId ?? 'No Student Id');
                    setLoggedIn(true);
                    console.log('Get Profile');
                } else {
                    console.log('delete cookie');
                    await axios.post('/api/signOut');
                }
            })
            .catch((error: AxiosError<WhoAmIResponse>) => {
                localStorage.removeItem('displayName');
                if (!error.response) {
                    setErrorMessage(
                        'Cannot connect to the network. Please try again later.',
                    );
                } else if (error.response.status === 401) {
                    setErrorMessage('Authentication failed');
                } else if (error.response.data.ok === false) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage(
                        'Unknown error occurred. Please try again later',
                    );
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(getInfo, [router.pathname]);

    if (loading) {
        return (
            <div className={styles['Screen']}>
                <div className={styles['Loading'] + ' H1'}>
                    Loading
                </div>
                <div className={styles['pong']}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    // if (cookieExpired) {

    // 	router.push('/home')

    // return (
    // 	<div className="h-screen flex flex-col justify-center">
    // 		<div className="flex justify-center">
    // 			<div>Please login</div>
    // 			<CircularProgress size={100} thickness={5} sx={{color:'#fa9c1d'}}/>
    // 		</div>
    // 	</div>
    // )
    // }
    if (router.pathname === '/preview') {
        return (
            <>
                <main>{children}</main>
            </>
        );
    }
    return (
        <>
            <Navbar loginStatus={loggedIn} fullName={fullName} />
            <main>{children}</main>
        </>
    );
}
