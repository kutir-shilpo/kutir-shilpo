import BambooProduct from "@/component/core/pages/Home/bambooProduct/bambooProduct";
import ClayProduct from "@/component/core/pages/Home/clayProduct/clayProduct";
import GlassProducts from "@/component/core/pages/Home/glassProduct/glassProduct";

const Products = () => {
    return (
        <div className="container">
            <GlassProducts/>
            <ClayProduct/>
            <BambooProduct/>
        </div>
    );
};

export default Products;