import { useEffect, useState } from 'react';
import axios from 'axios';
import { type Product } from '../types/product';

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<Product[]>('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Errore nel caricamento dei prodotti');
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};
