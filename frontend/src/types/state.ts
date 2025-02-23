import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { TUserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TAuthProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: TUserData;
};
