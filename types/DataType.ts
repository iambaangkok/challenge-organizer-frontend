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