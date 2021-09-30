import ApiConfig from '../config/api-config';
import Api from './client';
import { UpdateProfile } from './types';
export default function updateProfile(userDetails: UpdateProfile) {
    return Api(ApiConfig.BASE_URL + ApiConfig.UPDATEUSERDETAIL, userDetails.data, 'PATCH');
}
