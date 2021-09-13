import ApiConfig from './../config/api-config';
import Api from './client';

export default function AddAnnotation(email:String,password:String) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.LOGIN ,
{email,password},
    'POST', 'byBody'
  );
}
