interface IResponse {
    data: [];
}
export interface ILoginState {
    isLoggedIn: boolean;
    id: number;
    username: string;
    password: string;

    userData: {
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        status: string;
    };
    token: '';
    signUpResponse: IResponse;
    forgetPasswordResponse: IResponse;
    updateProfileResponse: IResponse;
    loginResponse: {
        status: string;
    };
}
