import Api from './client';
import ApiConfig from '../config/api-config'
import { StringMap } from 'i18next';

export default function AddAnnotation(params:any) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.BOOKDETAIL + params.id,
params.token,
    'GET', 'byHeader'
  );
}
