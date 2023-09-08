"use client"
import { Icon } from "@iconify/react";

const ProductSidebar = ({ product }) => {
  const { madeDate,quantity,sells,manufactureAuthority, location } = product;
  return (
    <div className="border-l flex flex-col gap-1 bg-slate-50 rounded-r p-6 h-full">
      <p>Available Quantity: {quantity}.</p>
      <p>Sells: {sells}.</p>
      <p>Manufacture: {manufactureAuthority}.</p>
      <p>Manufacture-Date: {madeDate}.</p>
      <p className="flex gap-1 items-center"><Icon className="text-lg" icon="heroicons-outline:location-marker" />{location}.</p>
    </div>
  );
};

export default ProductSidebar;
