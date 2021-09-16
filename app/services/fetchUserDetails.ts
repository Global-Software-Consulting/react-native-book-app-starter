import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation(token:any) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.USERDETAILS,null,"GET");
}
