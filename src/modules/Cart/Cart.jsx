import {useAutoAnimate} from '@formkit/auto-animate/react';
import {useCart} from '../../context/CartContext';
import {CartItem} from '../CartItem/CartItem';
import {Container} from '../Container/Container';
import {SkeletonLoader} from '../SkeletonLoader/SkeletonLoader';
import s from './Cart.module.css';


export const Cart = () => {
  const {cart} = useCart();
  const [parent, enableAnimations] = useAutoAnimate();

  const totalPrice = cart
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <section className={s.cart}>
      <Container className={s.cart__container}>
        <h2 className={s.cart__title}>
          Корзина {cart?.length ? `(${cart.length})` : ''}
        </h2>
        {cart && cart.length ? (
          <>
            <ul ref={parent} className={s.cart__list}>
              {cart ? (
                cart.map((item) => <CartItem key={item.id} {...item} />)
              ) : (
                <SkeletonLoader />
              )}
            </ul>
            <div className={s.cart__summary}>
              <h3 className={s.cart__summaryTitle}>Итого:</h3>
              <p className={s.cart__total}>{totalPrice}&nbsp;₽</p>
              <button
                form="order"
                type="submit"
                className={s.cart__orderBtn}
              >
                Заказать
              </button>
            </div>
          </>
        ) : (
          <p className={s.cart__empty}>Вы еще ничего не добавили в корзину.</p>
        )}
      </Container>
    </section>
  );
};
