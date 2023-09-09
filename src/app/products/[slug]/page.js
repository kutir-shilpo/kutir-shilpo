"use client"
import Product from "@/component/core/pages/product/product";
import useProduct from "@/hook/useProduct";
const SingleProduct = ({params}) => {
  console.log(params?.slug);
  const [product,loading] = useProduct(params?.slug)
  return (
    <div className="container">
      <Product product={product} />
    </div>
  );
};

export default SingleProduct;
