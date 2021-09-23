import ApiConfig from 'config/api-config';
import Api from './client';
interface ILoginDetail {
    data: {};
}
export default function loginWithGoogle(params:string) {
    return Api(ApiConfig.BASE_URL + ApiConfig.LOGINWITHGOOGLE, params, 'POST', false);
}
