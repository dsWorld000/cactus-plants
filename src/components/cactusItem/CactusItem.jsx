import React, { useContext } from "react";
import "./CactusItem.css";
import { RiShoppingBagLine } from "@remixicon/react";
import removeIcon from "../../assets/remove_icon_red.png";
import addIcon from "../../assets/add_icon_green.png";
import { StoreContext } from "../../context/StoreContex";

const CactusItem = ({ id, title, image, price }) => {
  const { cartItems, addToCart, removeToCart} = useContext(StoreContext);

  return (
    <article className="shop__card">
      <img src={image} alt="image" className="shop__img" />

      {!cartItems[id] 
       ? 
        <button  onClick={() => addToCart(id)} className="shop__button">
          <i><RiShoppingBagLine /></i>
        </button>
       : 
        <div className="item__counter">
            <img onClick={() => removeToCart(id)} src={removeIcon} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={addIcon} alt="" />
        </div>
      }

      <h3 className="shop__title">{title}</h3>
      <span className="shop__price">${price}</span>
    </article>
  );
};

export default CactusItem;
