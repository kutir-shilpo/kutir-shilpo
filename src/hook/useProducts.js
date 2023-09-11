"use client";

import { useEffect, useState } from "react";

const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_api}api/products`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return [products,loading];
};
export const useCategoryProducts = (category) => {
  const [loading, setLoading] = useState(true);
  const [CategoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_api}api/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCategoryProducts(data);
      })
      .catch((err) => console.log(err));
  }, [category]);
  return [CategoryProducts,loading];
};

export default useProducts;
