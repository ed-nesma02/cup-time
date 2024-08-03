import {useEffect} from 'react';
import {Container} from '../Container/Container';
import {Product} from '../Product/Product';
import s from './Products.module.css';
import {useProducts} from '../../context/ProductContext';

export const products = [
  {
    id: 1,
    title: 'Кокосовая матча',
    price: 390,
    img: 'img/photo-2.jpg',
  },
  {
    id: 2,
    title: 'Зеленый индонезийский чай',
    price: 340,
    img: 'img/photo-1.jpg',
  },
  {
    id: 3,
    title: 'Черный чай из Эфиопии',
    price: 380,
    img: 'img/photo.jpg',
  },
  {
    id: 4,
    title: 'Черный чай из Калифорнии',
    price: 360,
    img: 'img/photo-5.jpg',
  },
  {
    id: 5,
    title: 'Органическая веганская матча',
    price: 400,
    img: 'img/photo-4.jpg',
  },
  {
    id: 6,
    title: 'Чай черный Лакандона',
    price: 390,
    img: 'img/photo-3.jpg',
  },
];

export const Products = () => {
  const {products, setCategory} = useProducts();
  const category = 'tea';

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className={s.products}>
      <Container>
        <h2 className={s.products__title}>Чай</h2>

        <ul className={s.products__list}>
          {products.map((item) => (
            <li key={item.id} className={s.products__item}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
