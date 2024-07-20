import React, { useContext } from 'react'
import "./Cart.css";
import { StoreContext } from '../../context/StoreContex';


const Cart = () => {

  const {cactus_item_list, cartItems, removeToCart,  getTotalAmount} = useContext(StoreContext)

  return (
    <div className="cart">
    <div className="cart-items">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {cactus_item_list.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <p onClick={()=>removeToCart(item.id)} className="cross">x</p>
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
    <div className="cart-bottom">
      <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalAmount() === 0 ? 0 : 2+getTotalAmount()}</b>
          </div>
        </div>
        <button >PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart;