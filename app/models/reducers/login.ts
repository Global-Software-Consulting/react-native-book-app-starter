// interface IResponse {
//     data: [];

import { ImageSourcePropType } from "react-native";

// }
export interface ILoginState {
    isLoggedIn: boolean;
    id?: number;
    username?: string;
    password?: string;
    user: User;
}

export type User = {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    status: string;
    image?: ImageSourcePropType;
};
