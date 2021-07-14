import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { CartItem } from "./CartItem.js";
import "./Delivery.css";
import "./Cart.css";

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

  const handleSubmit = () => {
    if(cart.length <= 0) {
      alert("Order failed. Please add at least one product to your order!")
    }
    else {
      alert("Success! Please check your email for your order details and estimated delivery time")
    }
  }

  return (
    <div className="deliveryContainer">
      <h1>Online Delivery Form</h1>
      <p className="instructions deliveryInstructions">
        If you would like to order your groceries online and have
        them delivered to your house, please fill up the form below.
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
        <form method="post" action="" className="form-wrapper">
          <div className="question-wrapper">
            <label className="form-label">
              <strong>First Name</strong>
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="first name"
              size="50"
              className="delivery-input"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">
              <strong>Last Name</strong>
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="last name"
              size="50"
              className="delivery-input"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">
              <strong>Street Address</strong>
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="streetaddress"
              size="50"
              className="delivery-input"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">
              <strong>Suite/Apt #</strong>
            </label>
            <input
              type="text"
              name="aptnum"
              size="50"
              className="delivery-input"
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">
              <strong>City</strong>
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="city"
              size="50"
              className="delivery-input"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">
              <strong>Postal Code</strong>
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="postalcode"
              size="50"
              className="delivery-input"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">
              <strong>Email</strong>
              <strong className="required"> *</strong>
            </label>
            <input
              type="email"
              name="email"
              size="50"
              className="delivery-input"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">
              <strong>Phone Number</strong>
              <strong className="required"> *</strong>
            </label>
            <input
              type="tel"
              name="phonenumber"
              size="50"
              className="delivery-input"
              required
            />
          </div>
          <div className="button-wrapper">
            <input type="button" value="Submit Form" className="btn submit" onClick={handleSubmit}/>
            <input type="reset" value="Clear Form" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};
