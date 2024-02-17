import { IRequestOptions } from '@/shared/interfaces/request/IRequestOptions'

export default interface IRequest {
  get<T>(path: string, params?: object, options?: IRequestOptions): Promise<T>
  post<T>(path: string, body?: object, options?: IRequestOptions): Promise<T>
  put<T>(path: string, params?: object, options?: IRequestOptions): Promise<T>
  patch<T>(path: string, params?: object, options?: IRequestOptions): Promise<T>
  delete<T>(
    path: string,
    params?: object,
    options?: IRequestOptions,
  ): Promise<T>
  upload<T>(
    path: string,
    params: object,
    options?: IRequestOptions,
    onProgress?: Function,
  ): Promise<T>
}
