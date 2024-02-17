import { appContants } from '@/shared/configs'
import IRequest from '@/shared/interfaces/request/IRequest'
import { IRequestOptions } from '@/shared/interfaces/request/IRequestOptions'
import { AxiosSymbol, ShareSymbol } from '@/shared/interfaces/share.types'
import type IStorage from '@/shared/interfaces/storage/IStorage'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { inject, injectable } from 'inversify'
import queryString from 'query-string'

@injectable()
export class HttpRequest implements IRequest {
  private _httpClient: AxiosInstance
  private _appStorage: IStorage

  public constructor(
    @inject(ShareSymbol.IStorage) appStorage: IStorage,
    @inject(AxiosSymbol.Axios) httpClient: AxiosInstance,
  ) {
    httpClient.interceptors.request.use(
      function (config: InternalAxiosRequestConfig) {
        return config
      },
      function (error) {
        return Promise.reject(error)
      },
    )

    httpClient.interceptors.response.use(
      function (response: AxiosResponse) {
        return response
      },
      function (error) {
        if (error.response && error.response.data) {
          return Promise.reject(error.response.data)
        }
        return Promise.reject(error)
      },
    )

    this._httpClient = httpClient
    this._appStorage = appStorage
  }

  getOptions(options: IRequestOptions): AxiosRequestConfig {
    const token = this._appStorage.getItem(appContants.tokenKey)
    const opts: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? 'Bearer ' + token : '',
      },
      ...options,
    }

    return opts
  }

  async get<T>(
    path: string,
    params: object | undefined,
    options: IRequestOptions = {},
  ) {
    const _params = params ? queryString.stringify(params) : ''
    const _path = options.isFullPath ? path : appContants.primaryEndPoint + path
    const _url = _path + _params
    const _options = this.getOptions(options)

    const response: AxiosResponse<T> = await this._httpClient.get(
      _url,
      _options,
    )
    return response.data
  }

  async post<T>(path: string, body: object, options: IRequestOptions) {
    const _url = options.isFullPath ? path : appContants.primaryEndPoint + path
    const _options = this.getOptions(options)
    const response: AxiosResponse<T> = await this._httpClient.post(
      _url,
      body,
      _options,
    )

    return response.data
  }

  async put<T>(path: string, params: object, options: IRequestOptions) {
    const _url = options.isFullPath ? path : appContants.primaryEndPoint + path
    const _options = this.getOptions(options)
    const response: AxiosResponse<T> = await this._httpClient.put(
      _url,
      params,
      _options,
    )
    return response.data
  }

  async patch<T>(path: string, params: object, options: IRequestOptions) {
    const _url = options.isFullPath ? path : appContants.primaryEndPoint + path
    const _options = this.getOptions(options)
    const response: AxiosResponse<T> = await this._httpClient.patch(
      _url,
      params,
      _options,
    )
    return response.data
  }

  async delete<T>(path: string, params: object, options: IRequestOptions) {
    const _url = options.isFullPath ? path : appContants.primaryEndPoint + path
    const _options = this.getOptions(options)

    // delete with params;
    if (params) {
      _options.data = params
    }

    const response: AxiosResponse<T> = await this._httpClient.delete(
      _url,
      _options,
    )
    return response.data
  }

  async upload<T>(
    path: string,
    files: File,
    options: IRequestOptions,
    onProgress: () => void,
  ) {
    const _url = options.isFullPath ? path : appContants.primaryEndPoint + path

    const _form = new FormData()
    _form.append('type', files.type)
    _form.append('files', files)

    const _options = this.getOptions(options)
    if (!_options.headers) _options.headers = {}
    _options.headers['Content-Type'] = 'multipart/form-data'
    _options.onUploadProgress = onProgress

    const response: AxiosResponse<T> = await this._httpClient.post(
      _url,
      _form,
      _options,
    )
    return response.data
  }
}
