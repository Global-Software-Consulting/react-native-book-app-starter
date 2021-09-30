import ApiConfig from 'config/api-config';
import Api from './client';


export default function forgotPassword(email:string) {
    return Api(ApiConfig.BASE_URL + ApiConfig.FORGETPASSWORD, { email }, 'POST', false);
}
