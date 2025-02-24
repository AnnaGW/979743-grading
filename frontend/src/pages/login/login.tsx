import {FormEvent, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/auth-process/selectors'
import { loginAction } from '../../store/api-actions';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { AppRoute, AuthorizationStatus } from '../../const';

export const PASSWORD_PATTERN = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
export const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [login, setLogin] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate('/');
    }
  },[authorizationStatus, navigate]);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (login !== null && password !== null) {
      if (password.match(PASSWORD_PATTERN) && login.match(EMAIL_PATTERN)) {
        dispatch(loginAction({
          email: login,
          password: password
        }))
          .then((serverRusult) => {
            if (serverRusult.type === 'user/login/fulfilled') {
              navigate(AppRoute.ProductList); //TODO: куда переадресовывать после авторизации - на спиосок товаров?
            }
          });
      }
    }
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Авторизация — Guitar-shop</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Войти</h1>
            <p className="login__text">Hовый пользователь?
              <Link className="login__link" to={AppRoute.Registration}>Зарегистрируйтесь</Link>
              прямо сейчас
            </p>
            <form method="post" action="" onSubmit={submitHandler}>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input
                  value={login ?? ''}
                  onChange={(evt) => setLogin(evt.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  required
                />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="passwordLogin">Введите пароль</label><span>
                  <input
                    value={password ?? ''}
                    onChange={(evt) => setPassword(evt.target.value)}
                    type="password"
                    placeholder="• • • • • • • • • • • •"
                    id="passwordLogin"
                    name="password"
                    autoComplete="off"
                    required
                  />
                  <button className="input-login__button-eye" type="button">
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" type="submit">Войти</button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Login;
