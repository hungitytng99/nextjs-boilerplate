import { appContainer, appContants } from '@/shared/configs'
import { RequestState } from '@/shared/configs/app.contants'
import IRequest from '@/shared/interfaces/request/IRequest'
import { ShareSymbol } from '@/shared/interfaces/share.types'
import ICommonResponse from '@/shared/interfaces/response/ICommonResponse'

const httpRequest = appContainer.get<IRequest>(ShareSymbol.IRequest)

export const userRequest = {
  login: async (params: object) => {
    try {
      const response: ICommonResponse = await httpRequest.post<ICommonResponse>(
        '/',
        params,
      )
      return {
        state: RequestState.success,
        data: response.data,
      }
    } catch (error) {
      console.log('error', error)
      return {
        error: error,
        state: RequestState.error,
      }
    }
  },
}
