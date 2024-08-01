import { Outlet } from 'react-router-dom';
import {Products} from '../Products/Products';
import {Promo} from '../Promo/Promo';

export const Main = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};
