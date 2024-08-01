import {Container} from '../Container/Container';
import s from './Order.module.css';

export const Order = () => {
  return (
    <>
      <section className={s.order}>
        <Container>
          <h2 className={s.order__title}>Доставка</h2>

          <form className={`${s.order__form} ${s.orderForm}`} id="order">
            <fieldset
              className={`${s.orderForm__fieldset} ${s.orderForm__fieldset_text}`}
            >
              <input
                type="text"
                className={`${s.orderForm__input} ${s.orderForm__input_name}`}
                placeholder="Имя"
                name="name"
              />

              <input
                type="text"
                className={`${s.orderForm__input} ${s.orderForm__input_phone}`}
                placeholder="Телефон"
                name="phone"
              />

              <input
                type="text"
                className={`${s.orderForm__input} ${s.orderForm__input_address}`}
                placeholder="Адрес"
                name="address"
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
                  value="Картой"
                  type="radio"
                  className={s.orderForm__radio}
                />
                Картой
              </label>
              <label htmlFor="cash" className={s.orderForm__label}>
                <input
                  name="payment"
                  id="cash"
                  value="Наличные"
                  type="radio"
                  className={s.orderForm__radio}
                  defaultChecked
                />
                Наличные
              </label>
            </fieldset>
          </form>
        </Container>
      </section>
    </>
  );
};
