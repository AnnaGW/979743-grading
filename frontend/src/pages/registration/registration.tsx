import {FormEvent, useEffect, useMemo, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Registration(): JSX.Element {
  const [name, setName] = useState<string | null>(null);
  const [login, setLogin] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(name);
    console.log(login);
    console.log(password);
    console.log('evt = ', evt);
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Регистрация — Guitar-shop</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <form
              method="post"
              action=""
              onSubmit={submitHandler}
            >
              <div className="input-login">
                <label htmlFor="name">Введите имя</label>
                <input
                  onChange={(evt) => setName(evt.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  required
                />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input
                  onChange={(evt) => setLogin(evt.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  required
                />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="password">Придумайте пароль</label><span>
                  <input
                    onChange={(evt) => setPassword(evt.target.value)}
                    type="password"
                    placeholder="• • • • • • • • • • • •"
                    id="password"
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
              <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Registration;
