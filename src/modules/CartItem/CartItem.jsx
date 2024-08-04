import {useState} from 'react';
import {API_URL} from '../../const';
import {useCart} from '../../context/CartContext';
import s from './CartItem.module.css';

export const CartItem = (data) => {
  const [itemQuantity, setItemQuantity] = useState(data.quantity);
  const {updateCart} = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateCart(data.id, newQuantity);
    } else {
      updateCart(data.id, 0);
    }
  };
  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    if (newQuantity < 99) {
      setItemQuantity(newQuantity);
      updateCart(data.id, newQuantity);
    }
  };

  return (
    <li className={`${s.cart__item} ${s.productCart}`}>
      <img
        src={`${API_URL}${data.img}`}
        alt={data.title}
        className={s.productCart__img}
      />
      <div className={s.productCart__content}>
        <h3 className={s.productCart__title}>{data.title}</h3>
        <div className={`${s.productCart__counter} ${s.counter}`}>
          <button
            onClick={handleDecrease}
            className={`${s.counter__btn} ${s.counter__btn_minus}`}
          >
            -
          </button>
          <input
            type="number"
            className={s.counter__number}
            onChange={(e) => {
              if (e.target.value < 0) {
                updateCart(data.id, 0);
              } else if(e.target.value >  99) {
                setItemQuantity(99);
                updateCart(data.id, 99);
              } else {
                setItemQuantity(e.target.value);
                updateCart(data.id, e.target.value);
              }
            }}
            value={itemQuantity}
          />
          <button
            onClick={handleIncrease}
            className={`${s.counter__btn} ${s.counter__btn_plus}`}
          >
            +
          </button>
        </div>
        <p className={s.productCart__price}>{data.price}&nbsp;₽</p>
      </div>
    </li>
  );
};
