import React from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between px-10">
        <Link className="/">
          <div className=''>
            <img src="/images/logo2.png" alt="" className="w-[230px]" />
          </div>
        </Link>
        <div className="flex">
          <ul className='flex text-lg font-mediumjustify-between items-center gap-20 '>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>App</li>
          </ul>
        </div>
        <div className='text-m'>
        
          <Link to="/cart">
            <div className='flex relative cursor-pointer'>
              <BiCart />
              <p className='bg-red-700 absolute right-[-8px] text-xs h-10 w-5 r text-white flex justify-center items-center'>0</p>
            </div>
          </Link>
          <BiUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar
