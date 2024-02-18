import { ReduxState } from '../../store/store';

export const selectUser = (state: ReduxState) => state.user;
