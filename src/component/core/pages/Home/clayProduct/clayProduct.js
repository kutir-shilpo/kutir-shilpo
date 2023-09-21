"use client";
import ProductCard from "@/component/ui/productCard";
import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useProducts from "@/hook/useProducts";

const ClayProduct = ({ isProductsPage }) => {
  const [products, loading] = useProducts();
  return (
    <>
      {!(loading) ? (
        <>
          <h2 className="text-xl text-[#516067]  py-4">
            <span className="border-b-2 border-[#516067]">Clay</span> Products
          </h2>
          {/* show products */}
          <div className="grid gap-2 md:gap-4 xl:gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {!isProductsPage ? (
              <>
                {/* home page clay products show */}
                {products
                  .filter((product) => product.category === "clay")
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      key={product?._id}
                      id={product?._id}
                      product={product}
                    />
                  ))}
              </>
            ) : (
              <>
                {/* products page clay products show */}
                {products
                  .filter((product) => product.category === "clay")
                  .map((product) => (
                    <ProductCard
                      key={product?._id}
                      product={product}
                    />
                  ))}
              </>
            )}
          </div>
          {!isProductsPage && (
            <Link className="flex justify-end" href="/products/glass-products">
              <Button className="py-1 text-sm flex items-center mt-2">
                See More <Icon icon="heroicons-outline:arrow-sm-right" />
              </Button>
            </Link>
          )}
        </>
      ) : (
        <div className="">
        </div>
      )}
    </>
  );
};

export default ClayProduct;
