import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { authProcess } from './auth-process/auth-process';
// import { dataProcess } from './data-process/data-process';
// import { userActions } from './user-actions/user-actions';
// import { errorProcess } from './errors-process/errors-process';

export const rootReducer = combineReducers({
  [NameSpace.Auth]: authProcess.reducer,
  // [NameSpace.Data]: dataProcess.reducer,
  // [NameSpace.UserAction]: userActions.reducer,
  // [NameSpace.Error]: errorProcess.reducer,
});
