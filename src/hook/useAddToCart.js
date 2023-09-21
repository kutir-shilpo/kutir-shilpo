import { useState } from "react";
import useAuthContext from "./useAuthContext";
import { toast } from "react-hot-toast";
import useCart from "./useCart";

const useAddToCart = () => {
  const { user } = useAuthContext();
  const [,,,setCartItems,setCartLoading]=useCart();
  const [addCartLoader, setAddCartLoader] = useState(false);
  const addToCart = (product) => {
    setAddCartLoader(true);
    if (!user?.email) {
      setAddCartLoader(false);
      return toast.error("You need to login first");
    }
    const updateDoc = {
      email: user?.email,
      cartItem: {
        id: product?._id,
        name: product?.title,
        image: product?.image,
        price: product?.price,
      },
    };
    fetch(`/api/users`, {
      method: "PATCH",
      headers: {
        "contain-type": "application/json",
      },
      body: JSON.stringify(updateDoc),
    })
      .then((res) => res.json())
      .then(() => {
        // refetch cart item
        fetch(`/api/users?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setCartItems(data?.cartItem);
            setCartLoading(false);
            setAddCartLoader(false);
            toast.success("Added cart successfully");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Cart item not found");
            setCartLoading(false)
            setAddCartLoader(false);
          });
      })
      .catch(() => {
        setAddCartLoader(false);
        toast.error("something is wrong");
      });
  };
  return [addToCart, addCartLoader];
};

export default useAddToCart;
