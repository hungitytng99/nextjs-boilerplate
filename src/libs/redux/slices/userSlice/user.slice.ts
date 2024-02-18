import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getRandomUserAsync } from '.';
import { RequestState } from '@/shared/configs/app.contants';

const initialState: UserSliceState = {
  accessToken: '',
  status: RequestState.initial,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomUserAsync.pending, (state) => {
        state.status = RequestState.request;
      })
      .addCase(getRandomUserAsync.fulfilled, (state, action) => {
        state.status = RequestState.success;
        state.accessToken = action.payload.data?.accessToken;
      });
  },
});

export interface UserSliceState {
  accessToken?: string;
  status?: RequestState;
}
