import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation() {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.USERDETAILS,null,"GET");
}
