import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./images/logo.jpeg";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header">
      <div
        className="brand-container
      "
      >
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
              {t("Home")}
            </Link>
          </li>
          <li>
            <Link to="/3125-L8/product" onClick={() => setOpen(false)}>
              {t("Flower")}
            </Link>
          </li>
          <li>
            <Link to="/3125-L8/delivery" onClick={() => setOpen(false)}>
              {t("Order")}
            </Link>
          </li>
          <li>
            <Link to="/3125-L8/faq" onClick={() => setOpen(false)}>
              {t("Contact")}
            </Link>
          </li>
          <li>
            <Link to="/3125-L8/help" onClick={() => setOpen(false)}>
              {t("Help")}
            </Link>
          </li>
          <li>
            <button className="btn eng" onClick={() => changeLanguage("en")}>English</button>
            <button className="btn eng" onClick={() => changeLanguage("fre")}>Francais</button>
          </li>
        </ul>
      </div>
      {/* )} */}
    </div>
  );
};
