import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation(id:number) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.REMOVEFROMFAVORITES + id,
null,
    'DELETE', 'byHeader'
  );
}
