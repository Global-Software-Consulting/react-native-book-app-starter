import ApiConfig from '../config/api-config';
import Api from './client';
interface IData {
    data: [];
}
export default function updateProfile(data: IData) {
    return Api(ApiConfig.BASE_URL + ApiConfig.UPDATEUSERDETAIL, data, 'PATCH');
}
