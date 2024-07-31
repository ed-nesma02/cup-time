import { Container } from '../Container/Container';
import s from './Promo.module.css'

export const Promo = () => {
  return (
    <section className={s.promo}>
      <Container className={s.promo__container}>
          <h1 className={s.promo__title}>Попробуй новый вкус Арабики</h1>
          <a href="#" className={s.promo__link}>
            Перейти к кофе
          </a>
      </Container>
    </section>
  );
};
