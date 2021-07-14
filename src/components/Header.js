import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./images/logo.jpeg";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="brand-container
      "> 
        <img src={logo} className="logo" alt="Site logo"></img>
        <h1 className="brand">Flower Express</h1>
      </div>
      <span
          // style={!open ? { display: "" } : { visibility: "hidden" }}
          onClick={() => setOpen(true)}
          className="openbtn"
        >
          &#9776; Menu
        </span>
      <div className={open ? "sidenav active" : "sidenav"}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          &times;
        </button>
        <ul className="sidenavUL">
          <li>
            <Link to="/3125-L8/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/3125-L8/product" onClick={() => setOpen(false)}>
              Flowers
            </Link>
          </li>
          {/* <li>
                <Link to="/3125-L8/cart" onClick={() => setOpen(false)}>
                  View Order
                </Link>
              </li> */}
          <li>
            <Link to="/3125-L8/delivery" onClick={() => setOpen(false)}>
              View Order
            </Link>
          </li>
          <li>
            <Link to="/3125-L8/faq" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* )} */}
    </div>
  );
};
