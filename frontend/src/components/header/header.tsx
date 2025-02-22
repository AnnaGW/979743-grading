import { Link } from 'react-router-dom';

import Logo from '../logo/logo';

function Header(): JSX.Element { // TODO: передать пропсом состав меню, ссылки прописать через AppRoute
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="main-nav">
              <ul className="main-nav__list">
                <li className="main-nav__item"><a className="link main-nav__link" href="#">Каталог</a>
                </li>
                <li className="main-nav__item"><a className="link main-nav__link" href="#">Где купить?</a>
                </li>
                <li className="main-nav__item"><a className="link main-nav__link" href="#">О компании</a>
                </li>
              </ul>
          </nav>
          <div className="header__container"><span className="header__user-name">Имя</span>
            <Link className="header__link" to="login.html" aria-label="Перейти в личный кабинет">
                <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-account"></use>
                </svg>
                <span className="header__link-text">Вход</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
