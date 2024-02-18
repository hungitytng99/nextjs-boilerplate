import { createAppAsyncThunk } from '@/libs/redux/store/createAppAsyncThunk';
import { userRequest } from '@/shared/api/user.api';
import { TokenEntity } from '@/shared/app-model/entities/token.entity';
import ICommonResponse from '@/shared/interfaces/response/ICommonResponse';

export const getRandomUserAsync = createAppAsyncThunk('user/getRandomUserAsync', async () => {
  const response: ICommonResponse<TokenEntity> = await userRequest.login();
  return response;
});
