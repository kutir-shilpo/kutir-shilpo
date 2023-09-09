"use client";
import ProductCard from "@/component/ui/productCard";
import product1 from "@/assets/Glass-art/image-1.jpg";
import product2 from "@/assets/Glass-art/image-2.jpg";
import product3 from "@/assets/Glass-art/image-3.jpg";
import product4 from "@/assets/Glass-art/image-4.jpg";
import product5 from "@/assets/Glass-art/image-5.jpg";
import product6 from "@/assets/Glass-art/image-6.jpg";
import product7 from "@/assets/Glass-art/image-7.jpg";
import product8 from "@/assets/Glass-art/image-8.jpg";
import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

// temporal product object
const glassProductObj = [
  {
    id: 1,
    title: "japanese glass art",
    image: product1,
    price: 1200,
  },
  {
    id: 2,
    title: "product 2",
    image: product2,
    price: 1200,
  },
  {
    id: 3,
    title: "product 3",
    image: product3,
    price: 1200,
  },
  {
    id: 4,
    title: "product 4",
    image: product4,
    price: 1200,
  },
  {
    id: 5,
    title: "product 5",
    image: product5,
    price: 1200,
  },
  {
    id: 6,
    title: "product 6",
    image: product6,
    price: 1200,
  },
  {
    id: 7,
    title: "product 7",
    image: product7,
    price: 1200,
  },
  {
    id: 8,
    title: "product 8",
    image: product8,
    price: 1200,
  },
];

const GlassProducts = ({ isProductsPage }) => {
  return (
    <>
      <h2 className="text-xl text-[#516067]  py-4">
        <span className="border-b-2 border-[#516067]">Glass</span> Products
      </h2>
      {/* show products */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {!isProductsPage ? (
          <>
          {/* home page glass products */}
            {glassProductObj.slice(0,6).map((product) => (
              <ProductCard
                key={product?.id}
                id={product?.id}
                product={product}
              />
            ))}
          </>
        ) : (
          <>
          {/* products page glass products */}
          {glassProductObj.map((product) => (
              <ProductCard
                key={product?.id}
                id={product?.id}
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

export default GlassProducts;
