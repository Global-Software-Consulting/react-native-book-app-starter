import ApiConfig from 'config/api-config';
import Api from './client';

export default function AddAnnotation(params) {
    return Api(ApiConfig.BASE_URL + ApiConfig.LOGIN, params, 'POST', 'byBody');
}
