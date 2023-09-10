"use client";

import { useEffect, useState } from "react";

const useProduct = (id) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_api}api/product?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return [product,loading];
};

export default useProduct;
