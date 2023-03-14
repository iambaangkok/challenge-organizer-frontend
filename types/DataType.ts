export interface TaskData {
    taskId: string;
    description: string;
    doned: boolean;
    editAt: string;
    start: string;
    end: string;
    hasChallenges: ChallengeData;
    score: number;
}

export interface NotificationData {
    description: string;
    date: string;
}

export interface UserData {
    userId: number;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    cmuAccount?: string;
    studentId?: string;
    createdDate?: string;
    editAtDate?: string;
    coin?: string;
    equipmentFrame?: string;
    banStatus: boolean;
    isAdmin?: boolean;
    challenges?: ChallengeData[];
    constructors?: ChallengeData[];
    // submited?: Submission[];
    // inTeam?: Team;
    file?: File;
    // items?: Item[];
    // ratings?: Rating[];
    isHost?: ChallengeData[];
    isOwner?: PostData[];
}

export interface TabData {
    tabId: number;
    tabName?: string;
    permission: boolean;
    posts?: PostData[];
    hasChallenge?: ChallengeData;
}

export interface PostData {
    postId: number;
    content?: string;
    createdAtDate: string;
    upDateAt?: string;
    allowComment?: boolean;
    children?: PostData[]
    parent?: PostData
    owner?: UserData;
    hasTab?: TabData;
    hasChallenge?: ChallengeData;
}

export interface ChallengePageData {
    challengeId: string;
    challengeTitle: string;
    description: string;

    type: string;
    format: string;

    participants: UserData[];
    numParticipants: number;
    host: UserData;
    banckImg: string;

    maxParticipants: number;
    banUser: object[];
    publishedStatus: boolean;

    timeStamp: string;
    startDate: string;
    endDate: string;
    closed: boolean;

    file: {
        user: object;
        path: string;
    };
    rewards: [
        {
            rankMin: number;
            rankMax: number;
            rewardAbsolute: number;
        },
    ];
    teams: {
        team_id: number;
        menubar: object[];
    };
    maxTeams: number;
    rating: number;

    collaborators: UserData[];

    schema_v: string;
    join: boolean;
}

export interface ChallengeData {
    banckImg?: string;
    challengeId: number;
    challengeTitle: string;
    closed: boolean;
    createdAtDate: string;
    description: string;
    endDate?: string;
    format?: string;
    host: string;
    join: boolean;
    maxParticipants: number;
    maxTeams: number;
    numParticipants: number;
    publishedStatus: boolean;
    rating: number;
    startDate?: string;
    type: string;
    upDateAt: string;
}
