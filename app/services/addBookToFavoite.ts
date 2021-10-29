import ApiConfig from '../config/api-config';
import Api from './client';

export default function addBookToFavorite(id: number) {
    return Api(ApiConfig.BASE_URL + ApiConfig.ADDTOFAVORITES + id, null, 'POST');
}
