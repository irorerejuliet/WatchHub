import React, { useContext, useState } from "react";
import { BiCart, BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { quantity } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" top-0 left-0 w-full bg-[#CAE9EE] shadow-md z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo2-removebg-preview.png"
            alt="logo"
            className="w-32 sm:w-40 md:w-56"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-sm sm:text-base md:text-lg font-medium items-center gap-6 uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-700" : "hover:text-purple-700"
            }
          >
            Home
          </NavLink>
          <li className="hover:text-purple-700 cursor-pointer">Product</li>
          <li className="hover:text-purple-700 cursor-pointer">Contact</li>
          <li className="hover:text-purple-700 cursor-pointer">App</li>
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-5 text-lg relative">
          <Link to="/cart" className="relative">
            <BiCart className="text-xl" />
            {quantity > 0 && (
              <p className="bg-red-700 absolute -right-2 -top-2 text-xs h-4 w-4 text-white flex justify-center items-center rounded-full">
                {quantity}
              </p>
            )}
          </Link>
          <BiUser className="text-xl cursor-pointer" />

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#CAE9EE] px-4 pb-4">
          <ul className="flex flex-col gap-4 text-base font-medium uppercase">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "hover:text-purple-700"
              }
            >
              Home
            </NavLink>
            <li
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-700 cursor-pointer"
            >
              Product
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-700 cursor-pointer"
            >
              Contact
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-700 cursor-pointer"
            >
              App
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
