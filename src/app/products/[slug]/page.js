import productImage from "@/assets/Glass-art/image-1.jpg";
import Product from "@/component/core/pages/product/product";
const product = {
  id: 1,
  title: "japanese glass art",
  image: productImage,
  price: 1200,
  sells:120,
  manufactureAuthority:"Aida Chemical Industries",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima sed molestias ipsa aut esse, error inventore asperiores optio voluptas neque consectetur omnis. Ipsum odit aspernatur voluptatem dolorem omnis maiores nobis voluptate cumque sit nisi impedit dolore cupiditate a libero, animi molestiae corporis. Dolores dolorem dignissimos, voluptatibus, rerum ipsum ut, perferendis enim quod deleniti illum doloribus delectus modi! Voluptatibus ab exercitationem maiores, laborum dolor nisi aut earum unde in illo officiis reprehenderit ratione. Dignissimos laborum veritatis a perferendis! Maiores, consectetur?",
  quantity:10,
  madeDate:"10 jun",
  location:"Dhaka, Bangladesh"
};
const SingleProduct = () => {
  return (
    <div className="container">
      <Product product={product} />
    </div>
  );
};

export default SingleProduct;
