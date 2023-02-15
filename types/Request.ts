export interface NavLinks {
    name: string;
    path: string;
}

export type AuthorizationRequest = {
    cmuAccount: string;
    firstName: string;
    lastName: string;
    studentId?: string;
};

export type AuthorizationResponse = {
    displayName : string
    statusCode: number;
    message: string;
};
