"use client";

import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import { toast } from "react-hot-toast";

const useCart = () => {
  const { user } = useAuthContext();
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  //   cart items set on loader
  useEffect(() => {
    setCartLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_api}api/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data?.cartItem);
        setCartLoading(false);
      })
      .catch(() => {
        toast.error("Cart item not found");
      });
  }, [user]);
  const deleteCartItem = (id) => {
    // console.log(id, user?.email);
    const productInfo = { id, email: user?.email };
    fetch(`${process.env.NEXT_PUBLIC_api}api/removeCartProduct`, {
      method: "PATCH",
      headers: {
        "contain-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        fetch(`${process.env.NEXT_PUBLIC_api}api/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data?.cartItem);
        setCartLoading(false);
        toast.success("cart item delete")
      })
      .catch(() => {
        toast.error("Cart item not found");
      });
      })
      .catch((err) => console.log(err));
  };
  return [cartItems, cartLoading, deleteCartItem,setCartItems,setCartLoading];
};

export default useCart;
