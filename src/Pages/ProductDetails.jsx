import React, { useContext } from 'react'
import { ShopContext } from '../Components/context/ShopContext'
import { productData } from '../Components/constant/productData'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {addToCart} = useContext(ShopContext)

  const {id} = useParams()

  const product = productData.find(product =>{
    return product.id === parseInt(id)
  })

  return (
    <div>
      <div className='flex items-center p-40'>
        <div className='w-[460px]'>
          <img src={product.image} alt={product.title}/>
        </div>
        <div className='p-40'>
          <h3 className='text-2xl font-bold'>{product.title}</h3>
          <p className='text-xl font-medium text-red-700 mt-10'>${product.price}</p>
          <p className='text-xl text-gray-500 mt-10'>{product.description}</p>
          <button className='py-2 px-8 rounded-md  bg-red-600 hover:bg-red-800 mt-3 text-white' onClick={() => addToCart(product, id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
