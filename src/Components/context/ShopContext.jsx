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
    const total = cart.reduce((accumulator, currentItem) => {
    const priceAsNumber = parseFloat(currentItem.price)
    if(isNaN(priceAsNumber)) {
      return accumulator
    }

    return accumulator + priceAsNumber * currentItem.amount
  },0)
    setTotal(total)
  }, [cart])

  // calculate quantity of items in cart 
  useEffect(() =>{
    if (cart){
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      },0)
      setQuantity(amount)
    }
  }, [cart])

  // fiuntion to add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    const cartItem = cart.find((item) => {
      return item.id ===id;
    })

    if(cartItem){
      const newCart =[...cart].map((item) =>{
        if(item.id === id){
          return{...item, amount: cartItem.amount + 1}
        }else{
          return item
        }
      })
      setCart(newCart)
    }else{
      setCart([...cart, newItem])
    }
  }

  // function to remove from cart 
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart)
  }

  //function to clear the entire cart 
  const clearCart = () => {
    setCart([])
  }

  //function to incraese item quantity in cart
  const incraeseAmount = (id) =>{
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  //function to decraese item quantity cart
  const decreaseAmount = (id) =>{
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if(cartItem){
      const newCart = cart.map ((item) => {
        if(item.id === id){
          return{...item, amount: cartItem.amount - 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else{
      if(cartItem.amount < 2) {
        removeFromCart(id)
      }
    }
  }


  return (
    <ShopContext.Provider
      value={{ products, cart, clearCart, quantity, decreaseAmount, incraeseAmount, removeFromCart, addToCart, setProducts }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
