import { useContext } from "react"
import { Link } from "react-router-dom"
// import {ShopContext} from "../context/ShopContext"
import {ShopContext} from "./context/ShopContext"


const ProductList = () => {

  const {products} = useContext(ShopContext)

  return (
    <div>
      <div className="max-w-[1740px] m-auto p-20  text-center mt-40">
        <h2 className="pt-[12em] font-bold text-3xl font-poppins">
          Our Elegant & Expectional Collection
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-20">
          {products.map(({ id, image, title, price }) => (
            <div
              key={id}
              className="bg-white border border-gray-200 rounded-[8px]"
            >
              <Link to={`/product/${id}`}>
                <img
                  src={image}
                  alt={title}
                  className=" text-center m-auto py-4"
                />
                <div>
                  <h4 className="text-xm font-semibold ">{title}</h4>
                  <p className="text-[1rem] text-gray-400 py-2">${price}</p>
                </div>
              </Link>
              {/* How to write bg transition here */}
              <button className=" bg-white text-black border border-red-400 cursor-pointer text-[1rem]  hover:bg-red-800 hover:text-white py-2 px-20 ">
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
