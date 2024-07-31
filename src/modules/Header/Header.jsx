import {useRef} from 'react';
import {Container} from '../Container/Container';
import s from './Header.module.css';
import {useState} from 'react';

export const Header = () => {
  const menu = useRef(null);
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <a href="#" className={s.header__logoLink}>
          <img src="/img/logo.svg" alt="Логотип Cup Time" />
        </a>

        <nav className={s.header__nav}>
          <ul ref={menu} className={s.header__menu}>
            <li className={s.header__menuItem}>
              <a href="#" className={s.header__menuLink}>
                Чай
              </a>
            </li>
            <li className={s.header__menuItem}>
              <a href="#" className={s.header__menuLink}>
                Кофе
              </a>
            </li>
            <li className={s.header__menuItem}>
              <a href="#" className={s.header__menuLink}>
                Чайники
              </a>
            </li>
            <li className={s.header__menuItem}>
              <a href="#" className={s.header__menuLink}>
                Турки
              </a>
            </li>
            <li className={s.header__menuItem}>
              <a href="#" className={s.header__menuLink}>
                Прочее
              </a>
            </li>
          </ul>
        </nav>
        <div className={s.header__cartWrapper}>
          <a href="cart.html" className={s.header__cartLink}>
            6
          </a>
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
