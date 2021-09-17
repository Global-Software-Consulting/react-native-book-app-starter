export interface ILoginRequestState {
    type: string;
    token: string;
    username: string;
    password: string;
    signupResponse: string;
    payload: string;
}

interface IResponse {
    data: [];
}

export interface ILoginResponseState {
    type: string;
    response: IResponse;
    payload: IResponse | string | number;
}
