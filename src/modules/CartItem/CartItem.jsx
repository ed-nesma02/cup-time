import s from './CartItem.module.css';

export const CartItem = ({title, price, img}) => {
  return (
    <li className={`${s.cart__item} ${s.productCart}`}>
      <img src={img} alt={title} className={s.productCart__img} />
      <div className={s.productCart__content}>
        <h3 className={s.productCart__title}>{title}</h3>
        <div className={`${s.productCart__counter} ${s.counter}`}>
          <button className={`${s.counter__btn} ${s.counter__btn_minus}`}>
            -
          </button>
          <input type="number" className={s.counter__number} defaultValue={1} />
          <button className={`${s.counter__btn} ${s.counter__btn_plus}`}>
            +
          </button>
        </div>
        <p className={s.productCart__price}>{price}&nbsp;₽</p>
      </div>
    </li>
  );
};
