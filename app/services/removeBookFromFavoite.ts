import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation(token:string,id:number) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.REMOVEFROMFAVORITES + id,
token,
    'DELETE', 'byHeader'
  );
}
