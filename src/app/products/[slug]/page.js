"use client";
import ProductCard from "@/component/ui/productCard";
import { useCategoryProducts } from "@/hook/useProducts";
import { usePathname } from "next/navigation";
import React from "react";

const ProductByCategory = () => {
  const router = usePathname();
  const category = router.split("/").slice(-1)[0].split("-")[0];
  const [categoryProducts, categoryLoading] = useCategoryProducts(category);
  return (
    <>
      {!categoryLoading ? (
        <>
          <div className="mt-6 md:mt-8 ">
            <h2 className="text-xl text-[#516067] mb-4 md:mb-6">
              <span className="border-b-2 border-[#516067]">Clay</span> Products
            </h2>
            <div className="grid gap-2 md:gap-4 xl:gap-8 grid-cols-2 xl:grid-cols-4">
              {categoryProducts?.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="loader mt-6"></div>
      )}
    </>
  );
};

export default ProductByCategory;
