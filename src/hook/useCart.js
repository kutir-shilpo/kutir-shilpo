"use client";

import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useCart = () => {
  const { user } = useAuthContext();
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading,setCartLoading]=useState(false)

  //   cart items set on loader
  useEffect(() => {
    setCartLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_api}api/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data?.cartItem);
        setCartLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user]);
  const refetch=()=>{
    fetch(`${process.env.NEXT_PUBLIC_api}api/users?email=${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setCartItems(data?.cartItem);
      setCartLoading(false);
    })
    .catch((err) => console.log(err));
  }
  return [cartItems,cartLoading,refetch];
};

export default useCart;
