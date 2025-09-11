import React, { useContext } from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import ShopContext from "../context/ShopContext"

const Navbar = () => {
  const {quantity} = useContext(ShopContext)
  return (
    <div className="bg-[#CAE9EE]">
      <div className="flex items-center justify-between px-10">
        <Link to ="/">
            <img src="/images/logo2-removebg-preview.png" alt="logo" className="w-[230px]" />
        </Link>
        <div className="flex">
          <ul className="flex text-lg font-medium justify-between items-center gap-20 uppercase">
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>App</li>
          </ul>
        </div>
        <div className="text-m flex justify-between items-center gap-5">
          <Link to="/cart">
            <div className="flex justify-between  items-center relative cursor-pointer">
              <BiCart />
              <p className="bg-red-700 absolute right-[-8px] text-xs h-3 w-3 p-1  text-white flex justify-center items-center rounded-[50px]">
                {quantity}
              </p>
            </div>
          </Link>
          <BiUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar
