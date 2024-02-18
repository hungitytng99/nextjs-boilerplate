import { appContainer } from '@/shared/configs';
import { RequestState } from '@/shared/configs/app.contants';
import IRequest from '@/shared/interfaces/request/IRequest';
import ICommonResponse from '@/shared/interfaces/response/ICommonResponse';
import { ShareSymbol } from '@/shared/interfaces/share.types';
import { MockApiHelper } from '@/shared/helpers/mock-api.helper';
import { TokenEntity } from '@/shared/app-model/entities/token.entity';
import { NormalLoginBody } from '@/shared/app-model/params/login.param';
import { TodoEntity } from '@/shared/app-model/entities/todo.entity';

const httpRequest = appContainer.get<IRequest>(ShareSymbol.IRequest);

export const userRequest = {
  login: async (body?: NormalLoginBody) => {
    try {
      // For simulator api testing
      const mockResponse: ICommonResponse<TokenEntity> = {
        data: {
          accessToken: `generated-token-${Math.round(Math.random() * 1000)}`,
          expriedIn: 120,
        },
        status: 200,
      };
      const response: ICommonResponse<TokenEntity> = await MockApiHelper.success(mockResponse);

      return {
        state: RequestState.success,
        data: response.data,
      };
    } catch (error) {
      console.log('error', error);
      return {
        error: error,
        state: RequestState.error,
      };
    }
  },

  getTodos: async (params?: {}) => {
    try {
      // Api call
      const todoResponse: Array<TodoEntity> = await httpRequest.get<Array<TodoEntity>>(
        'https://jsonplaceholder.typicode.com/todos',
        params,
        { isFullPath: true },
      );
      return {
        state: RequestState.success,
        data: todoResponse,
      };
    } catch (error) {
      console.log('error', error);
      return {
        error: error,
        state: RequestState.error,
      };
    }
  },
};
