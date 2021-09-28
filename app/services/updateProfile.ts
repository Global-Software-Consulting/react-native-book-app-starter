import ApiConfig from '../config/api-config';
import Api from './client';
import { UpdateProfile } from './types';
export default function updateProfile(data: UpdateProfile) {
    return Api(ApiConfig.BASE_URL + ApiConfig.UPDATEUSERDETAIL, data, 'PATCH');
}
