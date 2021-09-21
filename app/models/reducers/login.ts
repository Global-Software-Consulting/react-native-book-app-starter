interface IResponse {
    data: [];
}
export interface ILoginState {
    isLoggedIn: boolean;
    id: number;
    username: string;
    password: string;
    user:user 
}

export type user =
    {
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        status: string;
    };
