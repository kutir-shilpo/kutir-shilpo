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

export default useProducts;
