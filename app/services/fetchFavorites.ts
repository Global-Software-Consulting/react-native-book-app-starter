import Api from './client';
import ApiConfig from './../config/api-config'

export default function AddAnnotation(data:string) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.BOOKSLIST + '%'+data+'%',
null,
    'GET', 'byParams'
  );
}
