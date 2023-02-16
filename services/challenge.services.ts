import axios from 'axios';
import { ChallengePageData } from '../pages/challenge/index';

const BASE_URL = 'http://localhost:3030/api';
const BASE_PATH = '/challenges';

export const fetchChallengeData = async (
    challengeTitle: string,
): Promise<ChallengePageData> => {
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
