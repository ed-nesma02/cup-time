import {useEffect, useRef} from 'react';
import {Container} from '../Container/Container';
import s from './Header.module.css';
import {useState} from 'react';
import {Link, NavLink, useParams} from 'react-router-dom';
import {useCart} from '../../context/CartContext';

export const Header = () => {
  const menu = useRef(null);
  const {cart} = useCart();
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const {category} = useParams();

  useEffect(() => {
    setMenuIsOpened(false);
    menu.current.style.transform = '';
  }, [category]);

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <Link to={'/'} className={s.header__logoLink}>
          <img src="/img/logo.svg" alt="Логотип Cup Time" />
        </Link>

        <nav className={s.header__nav}>
          <ul ref={menu} className={s.header__menu}>
            <li className={s.header__menuItem}>
              <NavLink
                to={`/products/tea`}
                className={({isActive}) =>
                  [
                    isActive ? s.header__menuLink_active : s.header__menuLink,
                  ].join(' ')
                }
              >
                Чай
              </NavLink>
            </li>
            <li className={s.header__menuItem}>
              <NavLink
                to={`/products/coffee`}
                className={({isActive}) =>
                  [
                    isActive ? s.header__menuLink_active : s.header__menuLink,
                  ].join(' ')
                }
              >
                Кофе
              </NavLink>
            </li>
            <li className={s.header__menuItem}>
              <NavLink
                to={`/products/teapots`}
                className={({isActive}) =>
                  [
                    isActive ? s.header__menuLink_active : s.header__menuLink,
                  ].join(' ')
                }
              >
                Чайники
              </NavLink>
            </li>
            <li className={s.header__menuItem}>
              <NavLink
                to={`/products/cezves`}
                className={({isActive}) =>
                  [
                    isActive ? s.header__menuLink_active : s.header__menuLink,
                  ].join(' ')
                }
              >
                Турки
              </NavLink>
            </li>
            <li className={s.header__menuItem}>
              <NavLink
                to={`/products/other`}
                className={({isActive}) =>
                  [
                    isActive ? s.header__menuLink_active : s.header__menuLink,
                  ].join(' ')
                }
              >
                Прочее
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.header__cartWrapper}>
          <Link to={'/cart'} className={s.header__cartLink}>
            {cart?.length}
          </Link>
          <button
            onClick={() => {
              setMenuIsOpened(!menuIsOpened);
              if (menu.current.style.transform) {
                menu.current.style.transform = '';
              } else {
                menu.current.style.transform = 'translateY(0)';
              }
            }}
            type="button"
            className={s.header__menuBurger}
          >
            <span
              className={
                !menuIsOpened ? s.barTop : `${s.barTop} ${s.barTop__opened}`
              }
            ></span>
            <span
              className={
                !menuIsOpened ? s.barMid : `${s.barMid} ${s.barMid__opened}`
              }
            ></span>
            <span
              className={
                !menuIsOpened ? s.barBot : `${s.barBot} ${s.barBot__opened}`
              }
            ></span>
          </button>
        </div>
      </Container>
    </header>
  );
};
