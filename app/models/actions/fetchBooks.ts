interface IResponse {
    detail: string;
}

export interface IBookResponse {
    type: string;
    payload: IResponse;
}

export interface IBookRequest {
    type: string;
    keyword: string;
}
