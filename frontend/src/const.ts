export enum AppRoute {
  // Main = '/',
  Login = '/',
  Logout = '/logout',
  Registration = '/registration',
  ProductList = '/product-list',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const BASE_URL = 'http://localhost:3000/api'; //TODO: порт передать через переменные окружения

export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 2000;

export const AUTH_TOKEN_KEY_NAME = 'guitar-shop-token';

export enum NameSpace {
  Auth = 'AUTH', // действия, связанные с авторизацией
  Data = 'DATA', // действия, связанные  запросом и отправкой данных
  Error = 'ERROR', // обработка ошибок сервера
  UserAction = 'USER_ACTION', // действия, связанные с реацией приложения на действия пользователя
}

export enum APIRoute {
  Login = 'auth/login',
  Registration = 'auth/register',
}
