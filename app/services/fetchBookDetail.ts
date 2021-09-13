import ApiConfig from '../config/api-config';
import Api from './client';

export default function AddAnnotation(params:any) {
  const x = ApiConfig.BASE_URL + ApiConfig.BOOKDETAIL + params.id
  console.log('params yeh hain', x)
  return Api(
    ApiConfig.BASE_URL + ApiConfig.BOOKDETAIL + params.id,
params.token,
    'GET', 'byHeader'
  );
}
