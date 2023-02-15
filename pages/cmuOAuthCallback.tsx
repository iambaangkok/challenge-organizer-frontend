import CircularProgress from "@mui/material/CircularProgress";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AuthorizationRequest, AuthorizationResponse } from "../types/Request";
import { SignInResponse } from "./api/signIn";
import styles from './index.module.css'

export default function CMUOAuthCallback() {
	const router = useRouter();
	const { code } = router.query;
	const [message, setMessage] = useState("");

	useEffect(() => {
		//Next.js takes sometime to read parameter from URL
		//So we'll check if "code" is ready before calling sign-in api
		if (!code) return;

		axios
			.post<SignInResponse>('api/signIn', { authorizationCode: code })
			.then(async (resp) => {
				if (resp.data.ok) {

					// get API Token
					await axios
						.get<{}, AxiosResponse, {}>('http://localhost:3000/api/whoAmI')
						.then((response) => {
							if (response.data.ok) {
								axios.post<AuthorizationResponse>('http://localhost:3001/api/users', {
									firstName: response.data.firstName,
									lastName: response.data.lastName,
									cmuAccount: response.data.cmuAccount,
									studentId: response.data.studentId
								}).then((resp) => {
									localStorage.setItem('displayName', resp.data.displayName)
									// console.log(resp.data.displayName)
								}).catch((err) => {

								})
							}
						}).catch((err) => {
							console.log(err)
						})

					router.push('/home')
				}
			})
			.catch((error: AxiosError<SignInResponse>) => {
				if (!error.response) {
					setMessage(
						"Cannot connect to CMU OAuth Server. Please try again later."
					);
				} else if (!error.response.data.ok) {
					setMessage(error.response.data.message);
				} else {
					setMessage("Unknown error occurred. Please try again later.");
				}
			});
	}, [code, router]);

	return (
		<div className={styles.ScreenLoading +" flex flex-col justify-center space-y-5"}>
			<div className="flex justify-center H1">
				Redirecting ...
			</div>
			<div className="flex justify-center">
				<CircularProgress size={100} thickness={5} sx={{ color: '#fa9c1d' }} />
			</div>
		</div>
	)
}
