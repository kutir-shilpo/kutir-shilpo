"use client";
import Product from "@/component/core/pages/product/product";
import useProduct from "@/hook/useProduct";
export const metadata = {
  title: "Kutir Shilpo-product",
};
const SingleProduct = ({ params }) => {
  const [product, loading] = useProduct(params?.slug);
  return (
    <>
      <Product product={product} loading={loading} />
    </>
  );
};

export default SingleProduct;