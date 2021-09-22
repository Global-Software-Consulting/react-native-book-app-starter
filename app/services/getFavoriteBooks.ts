import ApiConfig from '../config/api-config';
import Api from './client';

export default function getFavoriteBooks() {
    return Api(ApiConfig.BASE_URL + ApiConfig.FAVBOOK_LIST, null, 'GET');
}
