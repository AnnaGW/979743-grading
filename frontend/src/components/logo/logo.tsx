import { Link } from 'react-router-dom';

function Logo(): JSX.Element { // TODO: атрибут to через AppRoute
  return (
    <Link className="header__logo logo" to="main.html">
      <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" />
    </Link>
  )
}

export default Logo;
