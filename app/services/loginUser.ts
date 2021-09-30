import ApiConfig from 'config/api-config';
import Api from './client';
import { LoginDetail } from './types';

export default function loginUser(loginCredentials: LoginDetail) {
    return Api(ApiConfig.BASE_URL + ApiConfig.LOGIN, loginCredentials.params, 'POST', false);
}
