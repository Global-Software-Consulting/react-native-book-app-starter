interface IResult {
    id: number;
    firstName: string;
    lastName: string;
}

interface IResponse {
    id: number;
    status: string;
    result: IResult;
}

interface IHeaders {
    Authorization: string;
    body: string;
    params: string;
    method: string;
}

export interface ResponseGenerator {
    config?: string;
    data?: string;
    headers?: IHeaders;
    params?: string;
    request?: IHeaders | string | number;
    status?: string;
    statusText?: string;
    result?: IResponse;
    token?: string;
    response?: IResponse | undefined;
}
