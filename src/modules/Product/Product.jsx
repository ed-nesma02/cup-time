import s from './Product.module.css';

export const Product = ({img, price, title}) => {
  return (
    <article className={s.product}>
      <img src={img} alt={title} className="product__img" />
      <div className={s.product__content}>
        <h3 className={s.product__title}>{title}</h3>
        <p className={s.product__price}>{`${price}\u00A0₽`}</p>
      </div>
    </article>
  );
};
