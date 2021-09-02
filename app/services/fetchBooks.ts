import Api from './client';
import ApiConfig from './../config/api-config'

export default function AddAnnotation(data:[]) {
  console.log('data', data);
  return Api(
    ApiConfig.BASE_URL + ApiConfig.BOOKSLIST,
    null,
    'GET',
  

  );
}
