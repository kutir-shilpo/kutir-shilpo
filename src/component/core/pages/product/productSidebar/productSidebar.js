"use client";
import { Icon } from "@iconify/react";

const ProductSidebar = ({ product, loading }) => {
  const { madeDate, quantity, sells, manufactureAuthority, location } = product;
  return (
    <div className="border-l flex flex-col gap-1 bg-white rounded-r p-6 h-full">
      {!loading? (
        <>
          <p>Available Quantity: {quantity||"Out of Stock"}.</p>
          <p>Sells: {sells||0}.</p>
          <p>Manufacture: {manufactureAuthority}.</p>
          <p>Manufacture-Date: {madeDate}.</p>
          <p className="flex gap-1 items-center">
            <Icon
              className="text-lg"
              icon="heroicons-outline:location-marker"
            />
            {location&&location}.
          </p>
        </>
      ) : (
        <div className="loader mt-6"></div>
      )}
    </div>
  );
};

export default ProductSidebar;
