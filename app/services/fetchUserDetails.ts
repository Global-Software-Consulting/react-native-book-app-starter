import ApiConfig from '../config/api-config';
import Api from './client';

export default function getUserDetail() {
    return Api(ApiConfig.BASE_URL + ApiConfig.USERDETAILS, null, 'GET', true);
}
