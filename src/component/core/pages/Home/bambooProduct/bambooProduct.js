"use client";
import ProductCard from "@/component/ui/productCard";
import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import products from "@/data/products";

const BambooProduct = ({ isProductsPage }) => {
  return (
    <>
      <h2 className="text-xl text-[#516067]  py-4">
        <span className="border-b-2 border-[#516067]">Bamboo</span> Products
      </h2>
      {/* show products */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {!isProductsPage ? (
          <>
            {/* glass product for home page */}
            {products.filter(product=>product.category==="bamboo").slice(0, 6).map((product) => (
              <ProductCard
                key={product?._id}
                id={product?._id}
                product={product}
              />
            ))}
          </>
        ) : (
          <>
            {/* glass product for products page */}
            {products.filter(product=>product.category==="bamboo").map((product) => (
              <ProductCard
                key={product?._id}
                id={product?._id}
                product={product}
              />
            ))}
          </>
        )}
      </div>
      {!isProductsPage&&<Link className="flex justify-end" href="/products">
        <Button className="py-1 text-sm flex items-center mt-2">
          See More <Icon icon="heroicons-outline:arrow-sm-right" />
        </Button>
      </Link>}
    </>
  );
};

export default BambooProduct;
