"use client";
import useAuthContext from "@/hook/useAuthContext";
import useCart from "@/hook/useCart";
import { Icon } from "@iconify/react";

const CartCount = () => {
  const { user } = useAuthContext();
  const [cartItems, cartLoading] = useCart();
  // if(userLoading){}
  return (
    <>
      <Icon className="text-3xl mr-1" icon="heroicons-outline:shopping-cart" />
      <span className="h-6 w-6 flex items-center justify-center rounded-full p-1 bg-slate-300 text-red-600 font-semibold text-sm relative bottom-2">
        {!cartLoading ? (
          !user ? (
            0
          ) : (
            cartItems?.length || 0
          )
        ) : (
          <div className="mini-loader h-4 w-4"></div>
        )}
      </span>
    </>
  );
};

export default CartCount;
