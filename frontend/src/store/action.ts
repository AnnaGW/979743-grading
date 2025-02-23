import { createAction } from '@reduxjs/toolkit';
import { TUserData } from '../types/user-data';

export const userInfo = createAction<TUserData>('user/info');

export const serverError = createAction<string | null>('serverError');
