import {NavLink} from 'react-router-dom';
import {Container} from '../Container/Container';
import s from './Promo.module.css';

export const Promo = () => {
  return (
    <section className={s.promo}>
      <Container className={s.promo__container}>
        <h1 className={s.promo__title}>Попробуй новый вкус Арабики</h1>
        <NavLink to={'/products/coffee'} className={s.promo__link}>
          Перейти к кофе
        </NavLink>
      </Container>
    </section>
  );
};
