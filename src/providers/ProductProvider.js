"use client";

import useProducts, {
  useCategoryProducts,
  useSearchProducts,
} from "@/hook/useProducts";
import { createContext } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({category,title, children }) => {
  // Todo : marge those in one product
  const [products, loading] = useProducts();
  const [CategoryProducts, categoryLoading] = useCategoryProducts(category);
  const [searchProducts, searchLoading] = useSearchProducts(title);
  // console.log("from provider", loading, products);

  const productInfo = {
    products,
    CategoryProducts,
    searchProducts,
    loading,
    categoryLoading,
    searchLoading,
  };
  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
