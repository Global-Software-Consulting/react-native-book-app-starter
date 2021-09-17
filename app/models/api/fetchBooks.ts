interface IResponse {
    data: [];
}

export interface IFetchBooks {
    detail: IResponse | string | undefined;
}
