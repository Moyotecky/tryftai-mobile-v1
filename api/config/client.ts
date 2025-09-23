import Config from '@tryftai/libs/config/env';
import { getStorageAccessToken } from '@tryftai/libs/utils/token';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: Config.apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await getStorageAccessToken();

    console.log('ACCESS TOKEN ====> ', token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiClient };
