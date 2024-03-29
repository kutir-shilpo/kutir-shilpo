import ProductSidebar from "./productSidebar/productSidebar";
import ProductMain from "./productMain/productMain";

const Product = ({ product, loading }) => {
  return (
    <>
      <>
        <div className="grid md:grid-cols-7 mt-8">
          <div className="col-span-5">
            <ProductMain product={product} loading={loading} />
          </div>
          <div className="col-span-2 ">
            <ProductSidebar product={product} loading={loading} />
          </div>
        </div>
        {/* description */}
        <div className="rounded mt-4 bg-white p-6 md:p-8">
          {!loading ? (
            <>
              <h2 className="font-normal text-lg">Description</h2>
              <p className="text-[#516067]">{product?.description}</p>
            </>
          ) : (
            <div className="loader mt-6"></div>
          )}
        </div>
      </>
    </>
  );
};

export default Product;
