import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getTodos, login } from '.';
import { RequestState } from '@/shared/configs/app.contants';
import { TodoEntity } from '@/shared/app-model/entities/todo.entity';

const initialState: UserSliceState = {
  status: RequestState.initial,
  accessToken: '',
  getTodoStatus: RequestState.initial,
  todos: [],
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
      .addCase(login.pending, (state) => {
        state.status = RequestState.request;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = RequestState.success;
        state.accessToken = action.payload.data?.accessToken;
      })
      .addCase(getTodos.pending, (state) => {
        state.getTodoStatus = RequestState.request;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.getTodoStatus = RequestState.success;
        const todos = action.payload.data as Array<TodoEntity>;
        state.todos = todos.splice(0, Math.floor(Math.random() * 20));
      });
  },
});

export interface UserSliceState {
  accessToken?: string;
  status?: RequestState;
  getTodoStatus?: RequestState;
  todos: Array<TodoEntity>;
}
