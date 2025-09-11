import { useContext } from "react"
import { Link } from "react-router-dom"
import {ShopContext} from "./context/ShopContext"


const ProductList = () => {

  const {products, addToCart} = useContext(ShopContext)

  return (
    <div>
      <div className="max-w-[1740px] m-auto p-20  text-center mt-40">
        <h2 className="pt-[12em] font-bold lg:text-3xl text-xl font-poppins">
          Our Elegant & Expectional Collection
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-20 ">
          {products.map(({id, image, title, price }) => (
            <div
              key={id}
              className="bg-white border border-gray-200 rounded-[8px] "
            >
              <Link to={`/product/${id}`}>
                <img
                  src={image}
                  alt={title}
                  className="max-w-full max-h-full object-contain text-center m-auto py-4 transition-transform duration-150 ease-in-out transform hover:scale-105 "
                />
                <div>
                  <h4 className="text-xm font-semibold ">{title}</h4>
                  <p className="text-base text-gray-500 py-2">${price}</p>
                </div>
              </Link>
              <button onClick={() => addToCart(products, id)} className=" bg-white text-black border border-red-400  py-2 px-20 rounded-[5px] hover:bg-red-600 hover:text-white ">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList
