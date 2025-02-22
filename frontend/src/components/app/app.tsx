import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Registration from '../../pages/registration/registration';
import ProductList from '../../pages/product-list/product-list';


function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Registration}
          element={<Registration />}
        />
        <Route
          path={AppRoute.ProductList}
          element={<ProductList />}
        />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>

  )
}

export default App;
