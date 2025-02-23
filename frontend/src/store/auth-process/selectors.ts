import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { TUserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.Auth].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.Auth].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserInfo = (state: State): TUserData =>
  state[NameSpace.Auth].userInfo;
