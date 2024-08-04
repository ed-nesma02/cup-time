import ReactModal from 'react-modal';
import {useCart} from '../../context/CartContext';
import {useOrder} from '../../context/OrderContext';
import {Container} from '../Container/Container';
import s from './Order.module.css';
import {useState} from 'react';
import {API_URL} from '../../const';

ReactModal.setAppElement('#root');

export const Order = () => {
  const {orderDetails, updateOrderDetails, clearOrderDetails} = useOrder();
  const {cart, clearCart} = useCart();
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({id: item.id, quantity: item.quantity})),
    };
    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`Произошла ошибка при отправки заказа`);
      }
      const result = await response.json();
      setOrderStatus('success');
      setOrderId(result.order.id);
      clearCart();
      clearOrderDetails();
    } catch (error) {
      setOrderStatus('error');
      console.error(`Оишбка: ${error}`);
    } finally {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    updateOrderDetails(name, value);
  };

  return (
    <section className={s.order}>
      <Container>
        <h2 className={s.order__title}>Доставка</h2>

        <form
          className={`${s.order__form} ${s.orderForm}`}
          id="order"
          onSubmit={handleSubmit}
        >
          <fieldset
            className={`${s.orderForm__fieldset} ${s.orderForm__fieldset_text}`}
          >
            <input
              type="text"
              className={`${s.orderForm__input} ${s.orderForm__input_name}`}
              placeholder="Имя"
              name="name"
              value={orderDetails.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className={`${s.orderForm__input} ${s.orderForm__input_phone}`}
              placeholder="Телефон"
              name="phone"
              value={orderDetails.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className={`${s.orderForm__input} ${s.orderForm__input_address}`}
              placeholder="Адрес"
              name="address"
              value={orderDetails.address}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset
            className={`${s.orderForm__fieldset} ${s.orderForm__fieldset_delivery}`}
          >
            <legend className={s.orderForm__legend}>Оплата:</legend>
            <label htmlFor="card" className={s.orderForm__label}>
              <input
                name="payment"
                id="card"
                value="card"
                type="radio"
                className={s.orderForm__radio}
                checked={orderDetails.payment === 'card'}
                onChange={handleChange}
              />
              Картой
            </label>
            <label htmlFor="cash" className={s.orderForm__label}>
              <input
                name="payment"
                id="cash"
                value="cash"
                type="radio"
                className={s.orderForm__radio}
                checked={orderDetails.payment === 'cash'}
                onChange={handleChange}
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </Container>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={s.modal}
      >
        {orderStatus === 'success' ? (
          <h2 className={s.modal__title}>
            Ваш заказ успешно отправлен!<br/>Номер вашего заказа: {orderId}
          </h2>
        ) : (
          <h2 className={s.modal__title}>
            При отправке заказа произошла ошибка
          </h2>
        )}

        <button className={s.modal__btn}>Закрыть</button>
      </ReactModal>
    </section>
  );
};
