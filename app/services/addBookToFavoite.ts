import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation(id:number) {
console.log('add',ApiConfig.BASE_URL + ApiConfig.ADDTOFAVORITES + id)
  return Api(
    ApiConfig.BASE_URL + ApiConfig.ADDTOFAVORITES + id,
null,
    'POST', 'byHeader'
  );
}
