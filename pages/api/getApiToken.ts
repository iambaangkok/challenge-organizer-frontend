import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { SuccessResponse } from "./whoAmI";

export type AuthorizationResponse = {
    statusCode: number,
    message: string;
};

export default async function getApiToken() {
    axios
        .get<{}, AxiosResponse<SuccessResponse>, {}>("api/whoAmI")
        .then((response) => {
            if (response.data.ok) {
                axios.post<AuthorizationResponse>('http://locahost:3001/users', {
                    username: response.data.firstName + " " + response.data.lastName,
                    cmuAccount: response.data.cmuAccount,
                    studentId: response.data.studentId
                }).then((response) => {
                    console.log(response.data.message)
                })
            }
        })
}