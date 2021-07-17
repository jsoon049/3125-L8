import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalState";
import { Popup } from './Popup.js'

export const Card = ({ product }) => {
  const { addToCart } = useContext(GlobalContext);
  const [seen, setSeen] = useState(false);

  const handleClick = () => {
    setSeen(!seen)
  }

  return (
    <div className="product-card">
      <h2 className="prodtext prodName prodBold">{product.name}</h2>
      <p className="prodtext prodPrice prodBold">{"$" + product.price}</p>
      <img src={product.image} alt={product.alt} className="cart-item-image" />
      <div className="product-btn">
        <button className="btn" onClick={() => handleClick()}>
          Learn More
        </button>
        <button className="btn" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
      {seen ? <Popup product={ product } handleClick={ handleClick }/> : null}
    </div>
  );
};
