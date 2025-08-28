import React, { useState } from "react";
import { ShopContext } from "./ShopContext";
import { productData } from "../constant/productData";

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);

  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
