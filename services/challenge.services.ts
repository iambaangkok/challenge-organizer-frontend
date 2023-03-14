import axios from 'axios';
import { ChallengePageData } from '../types/DataType';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

export const fetchChallengeData = async (
    challengeTitle: string,
): Promise<ChallengePageData> => {
    console.log(`${BASE_URL}${BASE_PATH}/${challengeTitle}`)
    const resp = await axios.get(`${BASE_URL}${BASE_PATH}/${challengeTitle}`);
    return resp.data;
};

export const joinChallenge = async (
    challengeTitle: string,
    displayName: string,
) => {
    console.log(`${BASE_URL}${BASE_PATH}/${challengeTitle}/join`);
    const resp = await axios.put(
        `${BASE_URL}${BASE_PATH}/${challengeTitle}/join`,
        {
            displayName,
        },
    );
    return resp.data;
};

export const leaveChallenge = async (
    challengeTitle: string,
    displayName: string,
) => {
    console.log(`${BASE_URL}${BASE_PATH}/${challengeTitle}/leave`);
    const resp = await axios.put(
        `${BASE_URL}${BASE_PATH}/${challengeTitle}/leave`,
        {
            displayName,
        },
    );
    return resp.data;
};
