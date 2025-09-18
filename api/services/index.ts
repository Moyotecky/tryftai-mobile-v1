// @ts-nocheck
import { AxiosRequestConfig } from 'axios';
import { apiClient } from '../config/client';
import { endpoints, Endpoints, Url } from '../config/endpoints';

export class ApiClient {
  static resolveUrl<T extends Url>(
    url: T,
    ...args: T extends (...a: infer P) => string ? P : []
  ): string {
    return typeof url === 'function' ? url(...(args as any)) : url;
  }

  static async call<TService extends keyof Endpoints, TEndpoint extends keyof Endpoints[TService]>(
    service: TService,
    endpoint: TEndpoint,
    body?: Endpoints[TService][TEndpoint] extends { request: infer Req } ? Req : never,
    ...params: Endpoints[TService][TEndpoint]['url'] extends (...a: infer P) => string ? P : []
  ): Promise<Endpoints[TService][TEndpoint] extends { response: infer Res } ? Res : unknown> {
    const def = endpoints[service][endpoint];

    const url = this.resolveUrl(def.url, ...params);

    const config: AxiosRequestConfig = {
      method: def.method,
      url,
      data: body,
    };

    const res = await apiClient(config);
    console.log(res);
    return res.data;
  }
}
