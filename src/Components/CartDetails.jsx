import React, { useContext } from 'react'
import { ShopContext } from './context/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

const CartDetials = ({item}) => {
    const {decreaseAmount, increaseAmount, removeFromCart} = useContext(ShopContext)
         
    // if(!item) return null;

        const {id, title, image, price, amount} = item
  return (
    <div>
      <div>
        <div>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <div>
                     <FiTrash2/> Remove
                </div>
            </div>
        </div>
        <div>
            <button onClick={() => decreaseAmount(id)}>
                <IoMdRemove/>
            </button>
            <span>{amount}</span>
            <button onClick={() => increaseAmount(id)}>
                <IoMdAdd/>
            </button>
        </div>
        <div>
            ${price}
        </div>
        <div>
            {`$ ${parseFloat(price * amount).toFixed(2)}`}
        </div>
      </div>
    </div>
  )
}

export default CartDetials
