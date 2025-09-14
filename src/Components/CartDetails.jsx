import React, { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const CartDetials = ({ item }) => {
  const { decreaseAmount, increaseAmount, removeFromCart } =
    useContext(ShopContext);

  const { id, title, image, price, amount } = item;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-4 border border-b-4 rounded-lg">
        {/* Image + Title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left mt-2 sm:mt-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold">
              {title}
            </h3>
            <button
              onClick={() => removeFromCart(id)}
              className="flex items-center gap-1 text-red-500 text-xs sm:text-sm hover:underline mt-1"
            >
              <FiTrash2 /> Remove
            </button>
          </div>
        </div>

        {/* Quantity controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => decreaseAmount(id)}
            className="border rounded-md p-1 hover:bg-gray-100"
          >
            <IoMdRemove />
          </button>
          <span className="text-sm sm:text-base">{amount}</span>
          <button
            onClick={() => increaseAmount(id)}
            className="border rounded-md p-1 hover:bg-gray-100"
          >
            <IoMdAdd />
          </button>
        </div>

        {/* Price */}
        <div className="text-center text-sm sm:text-base text-yellow-900 font-medium">
          ${price}
        </div>

        {/* Total */}
        <div className="text-center text-sm sm:text-base font-semibold">
          $ {parseFloat(price * amount).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartDetials;
