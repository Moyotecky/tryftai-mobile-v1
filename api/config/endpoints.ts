import {
  LoginUserEmailRequest,
  LoginUserEmailResponse,
} from '../contracts/auth/login-user-account.contract';
import {
  RegisterUserEmailRequest,
  RegisterUserEmailResponse,
} from '../contracts/auth/register-user-account.contract';

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
      url: '/auth/user/login',
      request: {} as LoginUserEmailRequest,
      response: {} as LoginUserEmailResponse,
    } satisfies EndpointDef<LoginUserEmailRequest, LoginUserEmailResponse>,
    registerEmail: {
      method: 'post',
      url: '/auth/user/register-email',
      request: {} as RegisterUserEmailRequest,
      response: {} as RegisterUserEmailResponse,
    } satisfies EndpointDef<RegisterUserEmailRequest, RegisterUserEmailResponse>,
    resetPassword: {
      method: 'post',
      url: '/auth/user/reset-password',
    } satisfies EndpointDef<undefined, undefined>,
  },

  // users
  user: {},

  // notification
  userNotification: {
    getNotifications: {
      method: 'get',
      url: '/user/notifications',
    },
    markRead: {
      method: 'patch',
      url: (notificationId: string) => `/user/notifications/${notificationId}/read`,
    },
    markAllRead: {
      method: 'post',
      url: '/user/notifications/mark-all-read',
    },
    delete: {
      method: 'delete',
      url: (notificationId: string) => `/user/notifications/${notificationId}`,
    },
  },

  // // user-pin
  userPin: {
    create: {
      method: 'post',
      url: '/user/pin/create',
    },
    verify: {
      method: 'post',
      url: '/user/pin/verify',
    },
    change: {
      method: 'post',
      url: '/user/pin/change',
    },
  },
} as const;

export type Endpoints = typeof endpoints;
