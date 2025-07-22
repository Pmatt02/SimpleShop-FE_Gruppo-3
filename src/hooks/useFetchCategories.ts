import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<string[]>('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(() => {
        setCategories([]);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};
