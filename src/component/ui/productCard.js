"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col border rounded-t rounded-b-lg overflow-hidden">
      <Image
        height={400}
        width={200}
        className="h-auto w-full"
        src={product?.image}
        alt="product image"
      />
      <div className="px-2">
        <span className="flex mt-4 text-sm text-[#8298a2]">
          <Icon icon="heroicons-outline:star" />
          <Icon icon="heroicons-outline:star" />
          <Icon icon="heroicons-outline:star" />
          <Icon icon="heroicons-outline:star" />
          <Icon icon="heroicons-outline:star" />
        </span>
        <h4 className="text-sm font-semibold uppercase my-3">
          {product?.title}
        </h4>
        <p className="text-sm p-1 px-3 mb-5 rounded-sm inline-block text-[#516067] font-semibold bg-[#f3f8fc]">
          ৳ {product?.price}
        </p>
      </div>
      <button className="mt-auto block w-full text-white font-semibold text-sm bg-[#516067] py-1">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;