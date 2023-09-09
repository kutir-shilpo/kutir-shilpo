"use client";
import product1 from "@/assets/Bamboo-art/image-1.jpg";
import product2 from "@/assets/Glass-art/image-2.jpg";
import product3 from "@/assets/Glass-art/image-5.jpg";
import product4 from "@/assets/Bamboo-art/image-4.jpg";
import product5 from "@/assets/Bamboo-art/image-5.jpg";
import product6 from "@/assets/Bamboo-art/image-6.jpg";
import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import BestProductCard from "@/component/ui/bestProductCard";

const bestProductObj = [
    {
      id: 1,
      title: "Chines Bamboo art",
      image: product1,
      sells:202
    },
    {
      id: 2,
      title: "product 2",
      image: product2,
      sells:198
    },
    {
      id: 3,
      title: "product 3",
      image: product3,
      sells:170
    },
    {
      id: 4,
      title: "product 4",
      image: product4,
      sells:156
    },
    {
      id: 5,
      title: "product 5",
      image: product5,
      sells:135
    },
    {
      id: 6,
      title: "product 6",
      image: product6,
      sells:133
    }
  ];
const BestProducts = () => {
    return (
  
<>
      <h2 className="text-xl text-[#516067]  py-4">
        <span className="border-b-2 border-[#516067]">Best</span> Products
      </h2>
      {/* show products */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {bestProductObj.map((product) => (
          <BestProductCard key={product?.id} id={product?.id} product={product} />
        ))}
      </div>
      <Link className="flex justify-end" href="/products">
        <Button className="py-1 text-sm flex items-center mt-2">
          See More <Icon icon="heroicons-outline:arrow-sm-right" />
        </Button>
      </Link>
    </>
    );
};

export default BestProducts;