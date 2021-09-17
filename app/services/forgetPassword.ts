import ApiConfig from 'config/api-config';
import Api from './client';

export default function AddAnnotation(params: object) {
  return Api(
    ApiConfig.BASE_URL + ApiConfig.FORGETPASSWORD,
    params,
    'POST',
    false,
  )
}
