"use client";
import useAddToCart from "@/hook/useAddToCart";
import useAuthContext from "@/hook/useAuthContext";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { user } = useAuthContext();
  const [addToCart, cartLoader] = useAddToCart();

  const { replace } = useRouter();
  const viewDetailsHandler = (id) => {
    if (!user) {
      return toast.error("You need to login first");
    }
    replace(`/product/${id}`);
  };
  return (
    <div className="flex flex-col p-3 bg-white text-[#516067] duration-300 hover:bg-slate-100 shadow-md hover:shadow-lg border hover:border-slate-300 rounded-t rounded-b-lg overflow-hidden">
      <div
        onClick={() => viewDetailsHandler(product?._id)}
        className="grid cursor-pointer gap-2 grid-cols-2 mb-2"
      >
        <div>
          <Image
            height={400}
            width={200}
            className="h-auto border rounded w-full"
            src={product?.image}
            alt="product image"
          />
          {/* <div className="my-2 flex items-center gap-1">
            <Image
              height={20}
              width={20}
              className="rounded-full"
              src={
                product?.ownerImage ||
                "https://lh3.googleusercontent.com/a/ACg8ocJjxmmknCRqhPi5iqVvIh4lFpHvBXr5nv0r1hpRF0l6Vw=s96-c"
              }
              alt="owner profile"
            />
            <h5 className="font-semibold text-sm">
              {product?.ownerName || "kutir shilpo"}
            </h5>
          </div> */}
        </div>
        <div className="">
          <h4 className="text-sm font-semibold uppercase">{product?.title}</h4>
          <span className="flex my-3 text-sm">
            <Icon className="text-yellow-500" icon="heroicons-outline:star" />
            <Icon className="text-yellow-500" icon="heroicons-outline:star" />
            <Icon className="text-yellow-500" icon="heroicons-outline:star" />
            <Icon className="text-yellow-500" icon="heroicons-outline:star" />
            <Icon className="text-yellow-500" icon="heroicons-outline:star" />
          </span>
          <p className="text-sm font-semibold">৳ {product?.price}</p>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-2 items-center gap-2">
        <button
          onClick={() => addToCart(product)}
          className="block text-sm py-1 w-full font-semibold rounded text-[#94aeb9] hover:text-[#8298a2]"
        >
          {!cartLoader ? (
            <span className="flex justify-center items-center gap-1">
              <Icon icon="fa-solid:shopping-basket" />
              Add to Cart
            </span>
          ) : (
            <div className="h-4 w-4 mini-loader"></div>
          )}
        </button>
        <Link href="/" className="text-sm py-1 w-full text-center rounded text-white bg-[#94aeb9] hover:bg-[#8298a2]">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
