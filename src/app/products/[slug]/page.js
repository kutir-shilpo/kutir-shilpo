"use client";
import Product from "@/component/core/pages/product/product";
import useAuthContext from "@/hook/useAuthContext";
import useProduct from "@/hook/useProduct";
import { useRouter } from "next/navigation";
const SingleProduct = ({ params }) => {
  const [product, loading] = useProduct(params?.slug);
  const { user,userLoading } = useAuthContext();
  const { replace } = useRouter();

  if(userLoading){
    return <div className="text-[#516067] text-center mt-4">Loading...</div>;
  }
  if (!user) {
    return replace('/')
  }
  return (
    <>
      <Product product={product} loading={loading} />
    </>
  );
};

export default SingleProduct;
