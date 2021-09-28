import ApiConfig from '../config/api-config';
import Api from './client';

export default function getBooks(data: string) {
    return Api(ApiConfig.BASE_URL + ApiConfig.BOOKSLIST + '%' + data + '%', null, 'GET');
}
