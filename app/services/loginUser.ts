import { apiClient } from 'services/client';
import ApiConfig from 'config/api-config';

export default function loginUser(username: string, password: string) {
  return apiClient.post(ApiConfig.LOGIN, { username, password });
}
