export interface ILoginState {
  isLoggedIn: boolean;
  id: number;
  username: string;
  password: string;

userData: {firstName:string,lastName:string, email:string, gender:string,  status:string;};
token:'';
signUpResponse:{};
forgetPasswordResponse:{};
updateProfileResponse:{};
loginResponse:{
  status:string
}

}
