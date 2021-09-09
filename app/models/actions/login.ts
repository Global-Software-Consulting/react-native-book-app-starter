export interface ILoginRequestState {
  type: String;
  token: string;
  username: string;
  password: string;
}

interface IResponse {
  data: [];
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
