import React from 'react'
import { BsInstagram, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-yellow-700'>
      <div>
        <div>
          <div>
            <h2>ShopX</h2>
          </div>
          <div>
            <FaFacebook/>
            <BsInstagram/>
            <BsTwitterX/>
          </div>
        </div>
        <div>
          <p>Copy right @ ShopX 2025. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
