import { appContainer, appContants } from '@/app-configs'
import { RequestState } from '@/app-configs/app.contants'
import IRequest from '@/shared/interfaces/request/IRequest'
import { ShareSymbol } from '@/shared/interfaces/share.types'

const httpRequest = appContainer.get<IRequest>(ShareSymbol.IRequest)

export const userRequest = {
  list: async (params: object) => {
    try {
      const response = await httpRequest.get('/issuer/list/institution', params)
      return {
        state: RequestState.success,
        data: response,
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
