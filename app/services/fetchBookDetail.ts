import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation(id:number) {
console.log('add',ApiConfig.BASE_URL + ApiConfig.BOOKDETAIL + id)
  return Api(
    ApiConfig.BASE_URL + ApiConfig.BOOKDETAIL + id,
null,
    'GET', 'byHeader'
  );
}
