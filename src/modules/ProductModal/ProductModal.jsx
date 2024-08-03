import Modal from 'react-modal';
import {API_URL} from '../../const';
import s from './ProductModal.module.css';

Modal.setAppElement('#root');

export const ProductModal = ({data, isOpen, onRequestClose}) => {
  if (!data) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      contentLabel={`Модальное окно продукта: ${data.title}`}
    >
      <img
        src={`${API_URL}${data.img}`}
        alt={data.title}
        className={s.modal__img}
      />
      <div className={s.modal__content}>
        <h2 className={s.modal__title}>{data.title}</h2>
        <p className={s.modal__price}>{data.price}&nbsp;₽</p>
        <ul className={s.modal__list}>
          {Object.entries(data.additional).map(([key, value]) => (
            <li key={key} className={s.modal__item}>
              <span>{key}:</span> {value}
            </li>
          ))}
        </ul>
        <div className={s.modal__controller}>
          <div className={`${s.modal__counter} ${s.counter}`}>
            <button
              className={`${s.counter__btn} ${s.counter__btn_minus}`}
            ></button>
            <input
              type="number"
              defaultValue={1}
              className={s.counter__quantity}
            />
            <button
              className={`${s.counter__btn} ${s.counter__btn_plus}`}
            ></button>
          </div>
          <button className={s.modal__addBtn}>Добавить</button>
        </div>
      </div>
      <button className={s.modalClose} onClick={onRequestClose}>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.71228"
            y="12.1976"
            width="12"
            height="1.5"
            transform="rotate(-45 3.71228 12.1976)"
            fill="#B8B8B8"
          />
          <rect
            x="12.1976"
            y="13.2583"
            width="12"
            height="1.5"
            transform="rotate(-135 12.1976 13.2583)"
            fill="#B8B8B8"
          />
        </svg>
      </button>
    </Modal>
  );
};
