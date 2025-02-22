import {ChangeEvent} from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function ProductList(): JSX.Element {
  const onCahngeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Авторизация — Guitar-shop</title>
      </Helmet>
      <main className="page-content">
        <section className="product-list">
          <div className="container">
            <h1 className="product-list__title">Список товаров</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Вход</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Товары</a>
              </li>
            </ul>
            <div className="catalog">
              <form className="catalog-filter" action="#" method="post">
                <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Тип гитар</legend>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input onChange={onCahngeHandler} className="visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
                    <label htmlFor="acoustic">Акустические гитары</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input onChange={onCahngeHandler} className="visually-hidden" type="checkbox" id="electric" name="electric" checked />
                    <label htmlFor="electric">Электрогитары</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input onChange={onCahngeHandler} className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked />
                    <label htmlFor="ukulele">Укулеле</label>
                  </div>
                </fieldset>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Количество струн</legend>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input onChange={onCahngeHandler} className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked />
                    <label htmlFor="4-strings">4</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input onChange={onCahngeHandler} className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked />
                    <label htmlFor="6-strings">6</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input onChange={onCahngeHandler} className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
                    <label htmlFor="7-strings">7</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
                    <label htmlFor="12-strings">12</label>
                  </div>
                </fieldset>
                <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
              </form>
              <div className="catalog-sort">
                <h2 className="catalog-sort__title">Сортировать:</h2>
                <div className="catalog-sort__type">
                  <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по цене">по дате</button>
                  <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
                </div>
                <div className="catalog-sort__order">
                  <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"></button>
                  <button className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--active" aria-label="По убыванию"></button>
                </div>
              </div>
              <div className="catalog-cards">
                <ul className="catalog-cards__list">
                  <li className="catalog-item">
                    <div className="catalog-item__data">
                      <img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                      <div className="catalog-item__data-wrapper">
                        <Link className="link" to="./product.html"><p className="catalog-item__data-title">ЭлектроГитара Честер bass</p></Link>
                        <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                  <li className="catalog-item">
                    <div className="catalog-item__data">
                      <img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                      <div className="catalog-item__data-wrapper">
                        <Link className="link" to="./product.html"><p className="catalog-item__data-title">ЭлектроГитара Честер bass</p></Link>
                        <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                  <li className="catalog-item">
                    <div className="catalog-item__data">
                      <img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                      <div className="catalog-item__data-wrapper">
                        <Link className="link" to="./product.html"><p className="catalog-item__data-title">ЭлектроГитара Честер bass</p></Link>
                        <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                  <li className="catalog-item">
                    <div className="catalog-item__data">
                      <img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                      <div className="catalog-item__data-wrapper">
                        <Link className="link" to="./product.html"><p className="catalog-item__data-title">ЭлектроГитара Честер bass</p></Link>
                        <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                  <li className="catalog-item">
                    <div className="catalog-item__data">
                      <img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                      <div className="catalog-item__data-wrapper">
                        <Link className="link" to="./product.html"><p className="catalog-item__data-title">ЭлектроГитара Честер bass</p></Link>
                        <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                  <li className="catalog-item">
                    <div className="catalog-item__data">
                      <img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                      <div className="catalog-item__data-wrapper">
                        <Link className="link" to="./product.html"><p className="catalog-item__data-title">ЭлектроГитара Честер bass</p></Link>
                        <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                  <li className="catalog-item">
                    <div className="catalog-item__data">
                      <img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                      <div className="catalog-item__data-wrapper">
                        <Link className="link" to="./product.html"><p className="catalog-item__data-title">ЭлектроГитара Честер bass</p></Link>
                        <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button className="button product-list__button button--red button--big">Добавить новый товар</button>
            <div className="pagination product-list__pagination">
              <ul className="pagination__list">
                <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
                </li>
                <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Header />

      <Footer />
    </div>
  )
}

export default ProductList;
