import { IRequestOptions } from '@/shared/interfaces/request/IRequestOptions'

export default interface IRequest {
  get<T>(path: string, params?: object, options?: IRequestOptions): Promise<T>
  post(path: string, body?: object, options?: IRequestOptions): any
  put(path: string, params?: object, options?: IRequestOptions): any
  patch(path: string, params?: object, options?: IRequestOptions): any
  delete(path: string, params?: object, options?: IRequestOptions): any
  upload(
    path: string,
    params: object,
    options?: IRequestOptions,
    onProgress?: Function,
  ): any
}
