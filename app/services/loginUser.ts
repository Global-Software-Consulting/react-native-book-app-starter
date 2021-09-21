import ApiConfig from 'config/api-config';
import Api from './client';
interface ILoginDetail {
    data: {};
}
export default function loginUser(params:any) {
    return Api(ApiConfig.BASE_URL + ApiConfig.LOGIN, params, 'POST', false);
}
