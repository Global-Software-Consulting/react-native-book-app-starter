import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation(token:string,id:number) {
console.log('add',ApiConfig.BASE_URL + ApiConfig.ADDTOFAVORITES + id + token)
  return Api(
    ApiConfig.BASE_URL + ApiConfig.ADDTOFAVORITES + id,
token,
    'POST', 'byHeader'
  );
}
