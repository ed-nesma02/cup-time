import {useEffect} from 'react';
import {useState} from 'react';
import {API_URL} from '../const';
import {createContext} from 'react';
import {useContext} from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}/api/products/${category}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => console.error(`Error fetching product: ${err}`));
    }
  }, [category]);

  return (
    <ProductContext.Provider value={{products, setCategory}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
