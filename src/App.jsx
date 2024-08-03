import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import {Footer} from './modules/Footer/Footer';
import {Header} from './modules/Header/Header';
import {Main} from './modules/Main/Main';
import {Promo} from './modules/Promo/Promo';
import {Products} from './modules/Products/Products';
import {Cart} from './modules/Cart/Cart';
import {Order} from './modules/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/products/tea'} />,
  },
  {
    path: '/products/:category?',
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
    children: [
      {
        path: '',
        element: (
          <>
            <Promo />
            <Products />
          </>
        ),
      },
    ],
  },
  ,
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
    children: [
      {
        path: '',
        element: (
          <>
            <Cart />
            <Order />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
