import ApiConfig from '../config/api-config';
import Api from './client';

export default function addBookToFavorites(id: number) {
    return Api(ApiConfig.BASE_URL + ApiConfig.ADDTOFAVORITES + id, null, 'POST');
}
