export interface NavLinks {
    name: string;
    path: string;
}

export type AuthorizationRequest = {
    cmuAccount: string;
    username: string;
    studentId?: string;
};

export type AuthorizationResponse = {
    statusCode: number;
    message: string;
};


