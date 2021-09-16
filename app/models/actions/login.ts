export interface ILoginRequestState {
  type: String;
  token: string;
  username: string;
  password: string;
  signupResponse:string;
  payload:string
}

interface IResponse {
  data: [];
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
  payload:object | string | number
}
