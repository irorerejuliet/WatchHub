// import React from 'react'

import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#012136] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand & tagline */}
          <div>
            <h2 className="text-2xl font-bold mb-2">WatchX</h2>
            <p className="text-sm leading-relaxed">
              Premium men’s wristwatches designed for elegance and precision.
              Timeless style for every occasion.
            </p>
          </div>

          {/* Shop links (Men’s only) */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  All Men’s Watches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Luxury Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="Instagram">
                <BsInstagram className="hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="Twitter/X">
                <BsTwitterX className="hover:text-gray-300 transition" />
              </a>
            </div>

            {/* Optional Contact */}
            <p className="mt-4 text-sm">
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} WatchX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

