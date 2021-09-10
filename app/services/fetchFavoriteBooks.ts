import Api from './client';
import ApiConfig from '../config/api-config'
import { StringMap } from 'i18next';

export default function AddAnnotation(token:any) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.FAVBOOKLIST ,
token,
    'GET', 'byHeader'
  );
}
