import React from "react";
import { FaqItem } from "./FaqItem";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="faqContainer">
      <h1>Welcome to Flower Express</h1>
      <p className="instructions">Click on one of the dropdown menus below to learn more about us and our services</p>
      <div className="accordion">
        <FaqItem
          title="Who are we?"
          content="We are an online e-commerce company based in Toronto that specializes in importing and selling 
          exotic flowers that are hard to find at your local florist. No matter the event, we've got you covered!"
        />
        <FaqItem
          title="How to view our selection of flowers?"
          content='Click on the Flower tab to view our selection of flowers. Once redirected to the page, you 
          can filter through our selection based on types of flowers and price ranges.'
        />
        <FaqItem
          title="How to add a flower to your shopping cart?"
          content='Click on the Flower tab to view our selection of flowers. Once redirected to the page, 
          click on the button titled "View Flower" to learn more about that specific flower. From there click on the 
          button titled "Add To Cart" to add the flower to your shopping cart.'
        />
        <FaqItem
          title="How to view & place an order?"
          content="Click on the View Order tab to view your order. A form along with your order totals will be shown. 
                Follow the instructions and fill up the form to complete your online order. Click on the Submit Form button 
                to submit your order. A confirmation message will appear with your order details. "
        />
      </div>
    </div>
  );
};
