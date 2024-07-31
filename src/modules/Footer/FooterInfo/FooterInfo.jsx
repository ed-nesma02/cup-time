import s from '../Footer.module.css'

export const FooterInfo = () => (
  <div className={s.footer__info}>
    <p className={s.footer__copyright}>©CUPTIME, 2024</p>
    <p className={s.footer__description}>Проект сделан в учебных целях</p>

    <ul className={s.footer__developers}>
      <li className={s.footer__developer}>
        Designer:
        <a href="#" className={s.footer__developerLink}>
          Anastasia Ilina
        </a>
      </li>
      <li className={s.footer__developer}>
        Developer:
        <a href="#" className={s.footer__developerLink}>
          Eduard Nesmashnyi
        </a>
      </li>
    </ul>
  </div>
);
