import {CartItem} from '../CartItem/CartItem';
import {Container} from '../Container/Container';
import {products} from '../Products/Products';
import s from './Cart.module.css';

export const Cart = () => {
  return (
    <section className={s.cart}>
      <Container className={s.cart__container}>
        <h2 className={s.cart__title}>Корзина (6)</h2>
        <ul className={s.cart__list}>
          {products.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
        <div className={s.cart__summary}>
          <h3 className={s.cart__summaryTitle}>Итого:</h3>
          <p className={s.cart__total}>2200&nbsp;₽</p>
          <button form="order" type="submit" className={s.cart__orderBtn}>Заказать</button>
        </div>
      </Container>
    </section>
  );
};
