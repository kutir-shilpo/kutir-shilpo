import { useState } from "react";
import useAuthContext from "./useAuthContext";
import useCart from "./useCart";
import toast from "react-hot-toast";

const useAddToCart = () => {
    const {user,userLoading}=useAuthContext();
    const [,,refetch]=useCart();
    const [addCartLoader,setAddCartLoader]=useState(false);
    const addToCart = (product) => {
        setAddCartLoader(true);
        if(userLoading){
          return setAddCartLoader(true)
        }
        if(!user?.email){
          setAddCartLoader(true);
          return ;
        }
        const updateDoc = {
          email: user?.email,
          cartItem:{
            id:product?._id,
            name: product?.title,
            image:product?.image,
            price:product?.price
          }
        };
        fetch(`${process.env.NEXT_PUBLIC_api}api/users`, {
          method: "PATCH",
          headers: {
            "contain-type": "application/json",
          },
          body: JSON.stringify(updateDoc),
        })
          .then((res) => res.json())
          .then((data) => {
            setAddCartLoader(false);
            refetch();
            console.log(data);
          })
          .catch((err) => {
            setAddCartLoader(false);
            console.log(err);
          });
      };
    return [addToCart,addCartLoader];
};

export default useAddToCart;