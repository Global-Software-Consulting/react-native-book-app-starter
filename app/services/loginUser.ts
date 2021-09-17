import ApiConfig from 'config/api-config';
import Api from './client';
interface ILoginDetail {
    data: [];
}
export default function AddAnnotation(params: ILoginDetail) {
    return Api(ApiConfig.BASE_URL + ApiConfig.LOGIN, params, 'POST', 'byBody');
}
