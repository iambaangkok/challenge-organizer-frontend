export interface ChallengeList {
    challengeName:   string;
    type:            string;
    format:          string;
    description:     string;
    date:            string;
    numParticipants: number;
    maxParticipants: number;
    rating:          number;
    joined:          boolean;
    closed:          boolean;
    img:             string;
}

export interface NavLinks {
    name: string;
    path: string;
}

export interface NotificationList {
    description: string;
    date:        string;
}

export interface TaskList {
    taskId:        string;
    taskName:      string;
    challengeName: string;
    dueDate:       string;
    finished:      boolean;
}

