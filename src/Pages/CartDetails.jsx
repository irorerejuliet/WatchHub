import React, { useContext } from 'react'
import { ShopContext } from '../Components/context/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

const CartDetials = ({item}) => {
    const {decreaseAmount, incraeseAmount, removeFromCart} = useContext(ShopContext)

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
            <button onClick={() => incraeseAmount(id)}>
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
