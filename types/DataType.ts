export interface ChallengeCardData {
    challengeId: string;
    challengeTitle: string;
    type: string;
    format: string;
    description: string;
    startDate: string;
    endDate: string;
    numParticipants: number;
    maxParticipants: number;
    rating: number;
    join: boolean;
    closed: boolean;
    bannerImg: string;
}

export interface TaskData {
    taskId: string;
    taskName: string;
    challengeName: string;
    dueDate: string;
    finished: boolean;
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
    index: number;
    tabName: string;
    posts: [
        {
            author: {
                displayName: string;
                isHost: boolean;
            };
            contentMarkdown: boolean;
        },
    ];
}

export interface ChallengePageData {
    challengeId: string;
    challengeTitle: string;
    description: string;

    type: string;
    format: string;

    participants: UserData[];
    numParticipants: number;
    host: string;
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