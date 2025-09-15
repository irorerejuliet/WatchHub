import React, { useContext } from "react";
import { ShopContext } from "../Components/context/ShopContext";
import { productData } from "../Components/constant/productData";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();

  const product = productData.find((product) => product.id === parseInt(id));

  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-32 py-40">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
        {/* Image section */}
        <div className="w-full max-w-sm lg:max-w-md">
          <img
            src={product.image}
            alt={product.title}
            className=""
          />
        </div>

        {/* Text section */}
        <div className="w-full max-w-2xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {product.title}
          </h3>
          <p className="text-lg sm:text-xl font-medium text-red-700 mt-6">
            ${product.price}
          </p>
          <p className="text-base sm:text-lg text-gray-500 mt-6">
            {product.description}
          </p>
          <button
            className="py-2 px-6 sm:px-8 rounded-md bg-red-600 hover:bg-red-800 mt-6 text-white"
            onClick={() => addToCart(product, id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
