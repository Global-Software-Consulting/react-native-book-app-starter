export interface IData {
    email: string;
}

export interface UpdateProfile {
    data: {
        firstName: string;
        lastName: string;
        gender: string;
    }
}
export type LoginDetail = {
    params?: string;
}
