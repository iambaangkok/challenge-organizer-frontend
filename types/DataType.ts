export interface SubmissionData{
    
}

export interface TaskData {
    taskId: number;
    description?:string;
    score?:number;
    createAt?: string;
    editAt?:string;
    doned?:boolean;
    start:string;
    end:string;
    hasChallenges: ChallengeData;

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

export interface ChallengeData {
    challengeId?: string;
    challengeTitle: string;
    description: string;

    type?: string;
    format?: string;

    participants: UserData[];
    numParticipants?: number;
    host: UserData;
    bannerImg?: string;

    maxParticipants?: number;
    banUser: UserData[];
    publishedStatus?: boolean;

    createdAtDate?: string;
    upDateAt: string;
    startDate: string;
    endDate: string;

    closed: boolean;

    file: File;
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
    maxTeams?: number;
    ratings?: number;

    collaborators: UserData[];


    schema_v: string;
    join?: boolean;

    tabs? : TabData[]
    posts? : PostData[]
    tasks? : TaskData[]

}
