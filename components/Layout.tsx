import axios, { AxiosResponse, AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { WhoAmIResponse } from '../pages/api/whoAmI';
import Navbar from './navbar/NavBar'

export default function Layout({ children }: any) {
    const [fullName, setFullName] = useState("");
    const [cmuAccount, setCmuAccount] = useState("");
    const [studentId, setStudentId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState<boolean>(false)
    const [loginStatus, setLoginStatus] = useState<boolean>(false)

    const getInfo = () => {
        //All cookies that belong to the current url will be sent with the request automatically
        //so we don't have to attach token to the request
        //You can view token (stored in cookies storage) in browser devtools (F12). Open tab "Application" -> "Cookies"
        setLoading(true)
        setLoginStatus(false)
        axios
            .get<{}, AxiosResponse<WhoAmIResponse>, {}>("api/whoAmI")
            .then((response) => {
                if (response.data.ok) {
                    setErrorMessage("No error")
                    setFullName(response.data.firstName + " " + response.data.lastName);
                    setCmuAccount(response.data.cmuAccount);
                    setStudentId(response.data.studentId ?? "No Student Id");
                    setLoginStatus(true)
                }
                setLoading(false)
            })
            .catch((error: AxiosError<WhoAmIResponse>) => {
                if (!error.response) {
                    setErrorMessage(
                        "Cannot connect to the network. Please try again later."
                    );
                } else if (error.response.status === 401) {
                    setErrorMessage("Authentication failed");
                } else if (error.response.data.ok === false) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("Unknown error occurred. Please try again later");
                }
                setLoading(false)
            });
    }

    useEffect(getInfo, [])

    if (loading)
        return (
            <>
                <div>
                    Loading ...
                </div>
            </>
        )

    if (!loginStatus) {
        // some notification?

        return (
            <>
                <Navbar loginStatus={loginStatus} fullName={null} />
                <main>{children}</main>
            </>
        )
    }

    return (
        <>
            <Navbar loginStatus={loginStatus} fullName={fullName} />
            <main>{children}</main>
        </>
    )
}