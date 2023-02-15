export interface ChallengeCardData {
    challengeID: string;
    challengeName: string;
    type: string;
    format: string;
    description: string;
    date: string;
    numParticipants: number;
    maxParticipants: number;
    rating: number;
    joined: boolean;
    closed: boolean;
    img: string;
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
