import {useState} from 'react';
import {API_URL} from '../../const';
import s from './Product.module.css';
import {ProductModal} from '../ProductModal/ProductModal';

export const Product = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };
  const closeModal = (e) => {
    setModalIsOpen(false);
  };
  return (
    <>
      <a className={s.product__link}  href="#">
        <article className={s.product} onClick={openModal}>
          <img src={`${API_URL}${data.img}`} alt={data.title} className="product__img" />
          <div className={s.product__content}>
            <h3 className={s.product__title}>{data.title}</h3>
            <p className={s.product__price}>{data.price}&nbsp;₽</p>
          </div>
        </article>
      </a>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        data={data}
      />
    </>
  );
};
