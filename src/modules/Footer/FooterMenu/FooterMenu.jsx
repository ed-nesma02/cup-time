import { NavLink } from 'react-router-dom';
import s from '../Footer.module.css';

export const FooterMenu = () => (
  <div className={s.footer__nav}>
    <ul className={s.footer__menu}>
      <li className={s.footer__menuItem}>
        <NavLink
          to={`/products/tea`}
          className={({isActive}) =>
            [isActive ? s.footer__menuLink_active : s.footer__menuLink].join(
              ' '
            )
          }
        >
          Чай
        </NavLink>
      </li>
      <li className={s.footer__menuItem}>
        <NavLink
          to={`/products/coffee`}
          className={({isActive}) =>
            [isActive ? s.footer__menuLink_active : s.footer__menuLink].join(
              ' '
            )
          }
        >
          Кофе
        </NavLink>
      </li>
      <li className={s.footer__menuItem}>
        <NavLink
          to={`/products/teapots`}
          className={({isActive}) =>
            [isActive ? s.footer__menuLink_active : s.footer__menuLink].join(
              ' '
            )
          }
        >
          Чайники
        </NavLink>
      </li>
      <li className={s.footer__menuItem}>
        <NavLink
          to={`/products/cezves`}
          className={({isActive}) =>
            [isActive ? s.footer__menuLink_active : s.footer__menuLink].join(
              ' '
            )
          }
        >
          Турки
        </NavLink>
      </li>
      <li className={s.footer__menuItem}>
        <NavLink
          to={`/products/other`}
          className={({isActive}) =>
            [isActive ? s.footer__menuLink_active : s.footer__menuLink].join(
              ' '
            )
          }
        >
          Прочее
        </NavLink>
      </li>
    </ul>
  </div>
);
