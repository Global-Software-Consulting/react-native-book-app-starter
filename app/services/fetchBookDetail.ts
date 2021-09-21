import ApiConfig from '../config/api-config';
import Api from './client';

export default function getBookDetail(id: number) {
    return Api(ApiConfig.BASE_URL + ApiConfig.BOOKDETAIL + id, null, 'GET');
}
