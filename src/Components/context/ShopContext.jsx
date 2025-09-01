import React, { createContext, useEffect, useState } from "react";
import { productData } from "../constant/productData";


export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = (0)
  const [total, setTotal] = useState(0)

  // Calculate total price
  useEffect(() => {
    
  })

  // calculate quantity of items in cart 

  // fiuntion to add to cart

  // function to remove from cart 

  //function to clear the entire cart 

  //function to incraese item quantity in cart

  //function to decraese item quantity cart


  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
