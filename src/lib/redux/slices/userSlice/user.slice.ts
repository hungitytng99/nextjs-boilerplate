import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getRandomUserAsync } from '.'
import { RequestState } from '@/app-configs/app.configs'

const initialState: UserSliceState = {
  name: '',
  status: RequestState.initial,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomUserAsync.pending, (state) => {
        state.status = RequestState.request
      })
      .addCase(getRandomUserAsync.fulfilled, (state, action) => {
        state.status = RequestState.success
        state.name = action.payload.name
      })
  },
})

export interface UserSliceState {
  name: string
  status: RequestState
}
