import { createQueryHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useGetDashboardSummary = createQueryHook('useGetDashboardSummary', () =>
  ApiClient.call('dashboardData', 'getDashboadData')
);
