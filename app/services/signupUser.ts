import ApiConfig from 'config/api-config';
import Api from './client';

export default function AddAnnotation(params:object) {
  console.log('client params',params)
  return Api(
    ApiConfig.BASE_URL + ApiConfig.SIGNUP,
params,
    'POST', 'byBody'
  );
}
