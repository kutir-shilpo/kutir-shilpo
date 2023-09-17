"use client"
import { useState } from "react";
import toast from "react-hot-toast";

// todo: make it function
const useSearchProducts = () => {
  const [searchLoading, setSearchLoading] = useState(true);
  const [searchProducts, setSearchProducts] = useState([]);
  const searchHandler = (title) => {
    setSearchLoading(true);
    console.log(title);
    fetch(`${process.env.NEXT_PUBLIC_api}api/searchProducts/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchLoading(false);
        // setSearchProducts(data);
        console.log(data);
      })
      .catch((err) => {
        setSearchLoading(false);
        console.log(err);
        toast.error("something was wrong");
      });
  };
  return [searchProducts, searchLoading, searchHandler];
};
export default useSearchProducts;
