import {
  ForgotUserPasswordRequest,
  ForgotUserPasswordResponse,
} from '../contracts/auth/forgot-user-account-password.contract';
import {
  LoginUserEmailRequest,
  LoginUserEmailResponse,
} from '../contracts/auth/login-user-account.contract';
import {
  RegisterUserEmailRequest,
  RegisterUserEmailResponse,
} from '../contracts/auth/register-user-account.contract';
import {
  ResetUserPasswordRequest,
  ResetUserPasswordResponse,
} from '../contracts/auth/reset-user-account-password.contract';
import { GetDashboardSummaryResponse } from '../contracts/home/get-dashboard-data.contract';

export type Url = string | ((...args: any[]) => string);

export type EndpointDef<TRequest = unknown, TResponse = unknown> = {
  method: string;
  url: Url;
  request?: TRequest;
  response?: TResponse;
};

export const endpoints = {
  // authentication
  auth: {
    login: {
      method: 'post',
      url: '/auth/login',
      request: {} as LoginUserEmailRequest,
      response: {} as LoginUserEmailResponse,
    } satisfies EndpointDef<LoginUserEmailRequest, LoginUserEmailResponse>,
    registerEmail: {
      method: 'post',
      url: '/auth/register-email',
      request: {} as RegisterUserEmailRequest,
      response: {} as RegisterUserEmailResponse,
    } satisfies EndpointDef<RegisterUserEmailRequest, RegisterUserEmailResponse>,
    forgotPassword: {
      method: 'post',
      url: '/auth/forgot-password',
      request: {} as ForgotUserPasswordRequest,
      response: {} as ForgotUserPasswordResponse,
    } satisfies EndpointDef<ForgotUserPasswordRequest, ForgotUserPasswordResponse>,
    resetPassword: {
      method: 'post',
      url: '/auth/reset-password',
      request: {} as ResetUserPasswordRequest,
      response: {} as ResetUserPasswordResponse,
    } satisfies EndpointDef<ResetUserPasswordRequest, ResetUserPasswordResponse>,
  },

  // users
  user: {},

  // notification
  userNotification: {
    getNotifications: {
      method: 'get',
      url: '/notifications',
    },
    markRead: {
      method: 'patch',
      url: (notificationId: string) => `/notifications/${notificationId}/read`,
    },
    markAllRead: {
      method: 'post',
      url: '/notifications/mark-all-read',
    },
    delete: {
      method: 'delete',
      url: (notificationId: string) => `/notifications/${notificationId}`,
    },
  },

  // // user-pin
  userPin: {
    create: {
      method: 'post',
      url: '/pin/create',
    },
    verify: {
      method: 'post',
      url: '/pin/verify',
    },
    change: {
      method: 'post',
      url: '/pin/change',
    },
  },

  // home summary
  dashboardData: {
    getDashboadData: {
      method: 'get',
      url: '/dashboard/data',
      request: undefined,
      response: {} as GetDashboardSummaryResponse,
    },
  },
} as const;

export type Endpoints = typeof endpoints;
