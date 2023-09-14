"use client";
import ProductCard from "@/component/ui/productCard";
import { useCategoryProducts } from "@/hook/useProducts";
import { usePathname } from "next/navigation";
import React from "react";

const ProductByCategory = () => {
  const router = usePathname();
  const category = router.split("/").slice(-1)[0].split("-")[0];
  const [categoryProducts, loading] = useCategoryProducts(category);
  console.log(category);
  return (
    <>
      {!loading ? (
        <div className="mt-6 md:mt-8">
            <h2 className="text-xl text-[#516067] pb-5">
              <span className="border-b-2 border-[#516067]">{category}</span>{" "}
              Products
            </h2>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {categoryProducts?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="loader mt-6"></div>
      )}
    </>
  );
};

export default ProductByCategory;
