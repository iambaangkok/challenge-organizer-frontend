export interface ChallengeCardData {
    challengeId?: string;
    challengeTitle: string;
    type?: string;
    format?: string;
    description: string;
    startDate?: string;
    endDate?: string;
    numParticipants?: number;
    maxParticipants?: number;
    rating?: number;
    closed?: boolean;
    bannerImg?: string;
    publishedStatus?: boolean;
    createdAtDate?: string;
    upDateAt?: string;
    maxTeams?: number;
    join?: boolean;
    participants?: UserData[];
    collaborators? : UserData[];
    tabs?: TabData[];
    posts?: PostData[];
    tasks?: TaskData[];
    file?: File;
    host?: UserData;
}

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
    banStatus: boolean;
    cmuAccount: string;
    coin: string;
    createdDate: string;
    displayName: string;
    editAtDate: string | null;
    equipmentFrame: string;
    firstName: string;
    isAdmin: boolean;
    lastName: string;
    studentId: string;
    tasks: string;
    userId: number;
}

export interface TabData {
    tabId: number;
    tabName?: string;
    permission: boolean;
    posts?: PostData[];
    hasChallenge?: ChallengeData;
}

export interface PostData {
    content?: string;
    upDateAt?: string;
    parent?: PostData | null;
    owner?: UserData;
    hasTab?: TabData;
    hasChallenge: ChallengeData;
    postId: number;
    createdAtDate: string;
    allowComment?: boolean;
    children?: PostData[];
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
