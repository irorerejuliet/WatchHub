import React, { createContext, useState } from "react";
import { productData } from "../constant/productData";


export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);

  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
