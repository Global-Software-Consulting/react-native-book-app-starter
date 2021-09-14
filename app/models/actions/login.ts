export interface ILoginRequestState {
  type: String;
  token: string;
  username: string;
  password: string;
  signupResponse:string;
}

interface IResponse {
  data: [];
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
