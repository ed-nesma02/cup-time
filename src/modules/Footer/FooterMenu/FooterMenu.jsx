import s from '../Footer.module.css'

export const FooterMenu = () => (
  <div className={s.footer__nav}>
    <ul className={s.footer__menu}>
      <li className={s.footer__menuItem}>
        <a href="#" className={s.footer__menuLink}>
          Чай
        </a>
      </li>
      <li className={s.footer__menuItem}>
        <a href="#" className={s.footer__menuLink}>
          Кофе
        </a>
      </li>
      <li className={s.footer__menuItem}>
        <a href="#" className={s.footer__menuLink}>
          Чайники
        </a>
      </li>
      <li className={s.footer__menuItem}>
        <a href="#" className={s.footer__menuLink}>
          Турки
        </a>
      </li>
      <li className={s.footer__menuItem}>
        <a href="#" className={s.footer__menuLink}>
          Прочее
        </a>
      </li>
    </ul>
  </div>
);
