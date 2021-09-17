import ApiConfig from 'config/api-config';
import Api from './client';
interface IData {
    data: [];
}
export default function AddAnnotation(params: IData) {
    return Api(ApiConfig.BASE_URL + ApiConfig.SIGNUP, params, 'POST');
}
