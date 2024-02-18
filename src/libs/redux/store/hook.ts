import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { ReduxState, ReduxDispatch, ReduxStore } from './store';

export const useAppDispatch: () => ReduxDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export const useAppStore: () => ReduxStore = useStore;
