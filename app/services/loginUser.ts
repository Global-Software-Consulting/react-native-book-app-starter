import Api from './client';
import ApiConfig from './../config/api-config'
import { StringMap } from 'i18next';

export default function AddAnnotation(email:String,password:String) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.LOGIN ,
{email,password},
    'POST', 'byBody'
  );
}
