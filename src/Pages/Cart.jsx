import React, { useContext } from "react";
import { ShopContext } from "../Components/context/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import CartDetials from "../Components/CartDetails";

const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext);

  return (
    <div className="font-poppins px-4 sm:px-6 md:px-10 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
          <p className="text-sm sm:text-base mt-1">Items in cart: {quantity}</p>
        </div>
        <button
          onClick={clearCart}
          className="flex items-center gap-2 text-red-500 hover:underline self-start md:self-center"
        >
          <FiTrash2 className="text-lg" /> Clear Cart
        </button>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left: Items */}
        <div className="lg:col-span-2">
          {/* Header row for desktop only */}
          <div className="hidden md:grid grid-cols-5 gap-4 text-sm sm:text-base font-bold mb-4">
            <span className="col-span-2">Product Description</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Price</span>
            <span className="text-center">Total</span>
          </div>

          <div className="space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => <CartDetials item={item} key={item.id} />)
            ) : (
              <p className="text-center text-gray-500">Your cart is empty</p>
            )}
          </div>
        </div>

        {/* Right: Summary */}
        <div className="shadow-xl rounded-lg p-5 h-fit">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Cart Summary</h2>

          <div className="flex justify-between text-sm sm:text-base mb-4">
            <span className="font-medium">Items:</span>
            <span>{quantity}</span>
          </div>

          <div className="flex justify-between text-sm sm:text-base mb-4">
            <span className="font-medium">SubTotal:</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>

          <div className="flex justify-between text-sm sm:text-base mb-4">
            <span className="font-medium">Shipping:</span>
            <span className="font-medium">Free</span>
          </div>

          <div className="flex justify-between text-sm sm:text-base font-bold border-t pt-4">
            <span>Total Cost:</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>

          <button className="w-full mt-6 p-3 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm sm:text-base">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
