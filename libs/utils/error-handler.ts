import { isAxiosError } from 'axios';

export const formatApiError = (error: any): string => {
  if (!error) return 'Something went wrong';

  // Narrow AxiosError
  if (isAxiosError(error)) {
    const data = error.response?.data as { message?: string | string[] };

    if (data?.message) {
      if (Array.isArray(data.message)) {
        return data?.message?.[0];
      }
      return data?.message;
    }
  }

  return 'Something went wrong';
};
