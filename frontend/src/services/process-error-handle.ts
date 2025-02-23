import { TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { serverError } from '../store/action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(serverError(message));
  setTimeout(() => store.dispatch(serverError(null)), TIMEOUT_SHOW_ERROR);
};
