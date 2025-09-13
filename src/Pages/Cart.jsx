import React, { useContext, } from 'react'
import { ShopContext } from '../Components/context/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import CartDetials from '../Components/CartDetails'
const Cart = () => {

    const {cart, clearCart, total, quantity} = useContext(ShopContext)
  return (
    <div>
      <div>
        <div>
          <h2>Shoping cart</h2>
          <h3>Items: ({quantity})</h3>
          <FiTrash2 onClick={clearCart} />
        </div>
        <div>
          <span>Product Description</span>
          <span>QUantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        <div>
          {cart.length > 0 ? (
            cart.map((item) => <CartDetials item={item} key={item.id} />)
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>

      <div>
        <h2>Cart Summary</h2>
        <div>
          <span>Items:</span>
          <span>{quantity}</span>
        </div>
        <div>
          <div>
            <span>SubTotal</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div>
            <span>Total Cost</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart
