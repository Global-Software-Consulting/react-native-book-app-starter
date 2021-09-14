import ApiConfig from 'config/api-config';
import Api from './client';

export default function AddAnnotation(email:string,password:string) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.LOGIN ,
{email,password},
    'POST', 'byBody',
    'Login'

  );
}
