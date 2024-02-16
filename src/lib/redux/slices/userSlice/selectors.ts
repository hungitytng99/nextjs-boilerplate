import { ReduxState } from "../../store/store";

export const selectUsername = (state: ReduxState) => state.user.name;
export const selectUser = (state: ReduxState) => state.user;
