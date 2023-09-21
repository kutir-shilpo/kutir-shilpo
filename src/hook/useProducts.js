"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("something was wrong");
      });
  }, []);
  // console.log("from use products",products,loading);
  return [products, loading];
};
export const useCategoryProducts = (category) => {
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [CategoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    setCategoryLoading(true);
    fetch(`/api/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryLoading(false);
        setCategoryProducts(data);
      })
      .catch(() => {
        setCategoryLoading(false)
        toast.error("something was wrong");
      });
  }, [category]);
  return [CategoryProducts, categoryLoading];
};

export default useProducts;
