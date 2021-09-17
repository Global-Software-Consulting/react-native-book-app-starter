import Api from './client';
import ApiConfig from '../config/api-config';
import { StringMap } from 'i18next';

export default function AddAnnotation() {
    return Api(ApiConfig.BASE_URL + ApiConfig.FAVBOOKLIST, null, 'GET');
}
