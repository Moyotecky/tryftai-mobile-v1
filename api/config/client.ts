import axios from 'axios';

const apiClient = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    // 'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('delegate_access_token') : null;

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
