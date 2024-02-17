import { createAppAsyncThunk } from '@/libs/redux/store/createAppAsyncThunk'
import { fetchIdentityCount } from './fetchIdentityCount'

export const getRandomUserAsync = createAppAsyncThunk(
  'user/getRandomUserAsync',
  async () => {
    const response = await fetchIdentityCount()
    return response
  },
)
