import React from "react";

export const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClick}> x </span>
        <p className="prodtext prodName">{props.product.name}</p>
        <img src={props.product.image} alt={props.product.alt} className="cart-item-image popup-img"/>
        <p> {props.product.extraInfo} </p>
      </div>
    </div>
  );
};
