import { CircularProgress } from '@mui/material';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ErrorResponse, SuccessResponse } from '../pages/api/whoAmI';
import Navbar from './navbar/NavBar'

export default function Layout({ children }: any) {
    const [fullName, setFullName] = useState("");
    const [cmuAccount, setCmuAccount] = useState("");
    const [studentId, setStudentId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState<boolean>(false)
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [alert, setAlert] = useState(false)


    const router = useRouter().asPath

    const getInfo = () => {
        //All cookies that belong to the current url will be sent with the request automatically
        //so we don't have to attach token to the request
        //You can view token (stored in cookies storage) in browser devtools (F12). Open tab "Application" -> "Cookies"
        setLoading(true)
        setAlert(false)
        axios
            .get<{}, AxiosResponse<SuccessResponse>, {}>("api/whoAmI")
            .then((response) => {
                if (response.data.ok) {
                    setErrorMessage("No error")
                    setFullName(response.data.firstName + " " + response.data.lastName);
                    setCmuAccount(response.data.cmuAccount);
                    setStudentId(response.data.studentId ?? "No Student Id");
                    setLoggedIn(true)
                }
            })
            .catch((error: AxiosError<ErrorResponse>) => {
                if (!error.response) {
                    setErrorMessage(
                        "Cannot connect to the network. Please try again later."
                    );
                } else if (error.response.status === 401) {
                    setErrorMessage("Authentication failed");
                } else if (error.response.data.ok === false) {
                    setErrorMessage(error.response.data.message);
                } else if (error.response.data.message === "User not login") {
                    setErrorMessage(error.response.data.message);
                    setLoggedIn(false)
                } else {
                    setErrorMessage("Unknown error occurred. Please try again later");
                }
                setAlert(true)
            })
            .finally(() => {
                setLoading(false)
            });
    }

    useEffect(getInfo, [router])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };

    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        )

    if (!loggedIn) {
        return (
            <>
                <Navbar loginStatus={loggedIn} fullName={null} />
                <main>{children}</main>
            </>
        )
    }

    return (
        <>
            <Navbar loginStatus={loggedIn} fullName={fullName} />
            <main>{children}</main>
        </>
    )
}