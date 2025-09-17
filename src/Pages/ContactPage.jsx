import React from 'react'
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-center mb-12">
          Have a question about our watches or your order? Reach out to us
          below.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-md w-full"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border rounded-md md:col-span-2 h-32"
          />
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md md:col-span-2">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-600">support@watchHub.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-600">+2349052539602</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Business Hours</h2>
            <p className="text-gray-600">Mon–Fri: 9 AM – 6 PM</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 text-center">
          <Link to="#" className="mx-2 text-blue-500">
            Facebook
          </Link>
          <Link to="#" className="mx-2 text-blue-400">
            Twitter
          </Link>
          <Link to="#" className="mx-2 text-pink-500">
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage
