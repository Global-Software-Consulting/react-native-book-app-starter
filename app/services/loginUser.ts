import ApiConfig from 'config/api-config';
import Api from './client';

interface Data {
    email: string;
    password: string;
}

export default function loginUser(params: Data) {
    return Api(ApiConfig.BASE_URL + ApiConfig.LOGIN, params, 'POST', false);
}
