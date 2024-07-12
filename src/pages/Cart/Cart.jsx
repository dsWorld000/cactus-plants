import React from 'react'
import "./Cart.css";
import cactus_item_list from "../../assets/assets"

const Cart = () => {
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
      {cactus_item_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className="cross">x</p>
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
            <p>$</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>$</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>$</b>
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