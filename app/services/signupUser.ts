import ApiConfig from 'config/api-config';
import Api from './client';
interface IData {
    data: [];
}
export default function signupUser(params: string) {
    return Api(ApiConfig.BASE_URL + ApiConfig.SIGNUP, params, 'POST', false);
}
