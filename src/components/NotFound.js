import React from "react";
import { Link } from "react-router-dom";
import errorimg from "./images/404.jpeg";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="errorcontainer">
      <div>
        <p className="errortitle">Oops!</p>
        <div className="errortextwrap">
          <p className="errortext">
            We can't seem to find the page you're looking for
          </p>
          <p className="errortext">Error Code: 404</p>
          <p className="errortext">Here are some helpful links instead:</p>
        </div>
        <Link to="/3125-L8/" className="errorlink">
          Home
        </Link>
        <Link to="/3125-L8/product" className="errorlink">
          Flowers
        </Link>
        <Link to="/3125-L8/delivery" className="errorlink">
          View Order
        </Link>
        <Link to="/3125-L8/faq" className="errorlink">
          Contact Us
        </Link>
        <Link to="/3125-L8/help" className="errorlink">
          Help
        </Link>
      </div>
      <img src={errorimg} alt="image for 404 error" className="errorimg" />
    </div>
  );
};
