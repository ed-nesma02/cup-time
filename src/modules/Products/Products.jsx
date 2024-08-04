import {useEffect} from 'react';
import {Container} from '../Container/Container';
import {Product} from '../Product/Product';
import s from './Products.module.css';
import {useProducts} from '../../context/ProductContext';
import {useParams} from 'react-router-dom';
import {SkeletonLoader} from '../SkeletonLoader/SkeletonLoader';

const categories = {
  tea: 'Чай',
  coffee: 'Кофе',
  teapots: 'Чайники',
  cezves: 'Турки',
  other: 'Прочее',
};

export const Products = () => {
  const {products, setCategory} = useProducts();
  const {category} = useParams();

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className={s.products}>
      <Container>
        <h2 className={s.products__title}>{categories[category]}</h2>

        <ul className={s.products__list}>
          {products.length ? (
            products.map((item) => (
              <li key={item.id} className={s.products__item}>
                <Product {...item} />
              </li>
            ))
          ) : (
            <SkeletonLoader />
          )}
        </ul>
      </Container>
    </section>
  );
};
