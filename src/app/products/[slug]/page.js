import productImage from "@/assets/Glass-art/image-1.jpg";
import Product from "@/component/core/pages/product/product";
import products from "@/data/products";
const SingleProduct = ({params}) => {
const product = products.find(product=>product?._id===parseInt(params?.slug))
  return (
    <div className="container">
      <Product product={product} />
    </div>
  );
};

export default SingleProduct;
