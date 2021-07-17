import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { CartItem } from "./CartItem.js";
import "./Delivery.css";
import "./Cart.css";
import WizardForm from "./WizardForm.js";

export const Delivery = () => {
  const { cart } = useContext(GlobalContext);
  let totalPrice = 0;
  let sorted = [].concat(cart);
  if (cart.length > 0) {
    for (let i = 0; i < sorted.length; i += 1) {
      totalPrice += sorted[i].price;
    }
    totalPrice = parseFloat(totalPrice).toFixed(2);
    sorted.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="deliveryContainer">
      <h1>Online Delivery Form</h1>
      <p className="instructions deliveryInstructions">
        Follow the instructions and fill up the form below to complete your
        order.
      </p>
      <div className="delivery-wrapper">
        <div className="cartContainer delivery-cart-container">
          {cart.length > 0 ? (
            <div className="delivery-cart-wrapper">
              <h2 className="delivery-cart-title">Your Order</h2>
              {sorted.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
              <p className="totalPrice">{"Total Price: $" + totalPrice}</p>
            </div>
          ) : (
            <h2 className="no-items">Add products to your order!</h2>
          )}
        </div>
        <WizardForm />
      </div>
    </div>
  );
};
