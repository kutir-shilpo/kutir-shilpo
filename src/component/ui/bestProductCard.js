"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestProductCard = ({ product,id }) => {
  return (
    <Link
      href={`/products/${id}`}
      className="bestProductCard relative flex flex-col border rounded-t rounded-b-lg overflow-hidden"
    >
      <Image
        height={400}
        width={200}
        className="h-full w-full"
        src={product?.image}
        alt="product image"
      />
      <div className="px-2 py-1 w-full">
        <h4 className="text-sm font-semibold uppercase">{product?.title}</h4>
        <p className="text-sm rounded-sm inline-block text-[#516067] font-semibold">
          {product?.sells} sells
        </p>
      </div>
      <div className="bestProductHoverItem absolute z-20 -bottom-[100%] left-0 h-full w-full flex gap-1 items-center justify-center text-white bg-[#8298a2]">
        <p className="text-sm">View Details</p>
        <Icon className="text-base" icon="heroicons-outline:arrow-right" />
      </div>
    </Link>
  );
};

export default BestProductCard;
