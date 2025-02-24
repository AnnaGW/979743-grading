import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { TUserData } from '../types/user-data';
import { TAuthData } from '../types/auth-data';
import { State, AppDispatch } from '../types/state';
import { saveToken } from '../services/token';
import { APIRoute } from '../const';

export const checkAuthAction = createAsyncThunk<
  TUserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<TUserData>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  TUserData,
  TAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/login', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<TUserData>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(data.token);
  console.log('data = ', data);
  return data;
});
