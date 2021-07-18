import React from "react";
import "./Customer.css";
import { useTranslation } from "react-i18next";

export const Customer = () => {
  const { t, i18n } = useTranslation();
  // State used to track user preferences
  const [state, setState] = React.useState({
    Orchid: JSON.parse(sessionStorage.getItem("Orchid")) || false,
    hyacinth: JSON.parse(sessionStorage.getItem("hyacinth")) || false,
    lilly: JSON.parse(sessionStorage.getItem("lilly")) || false,
  });

  // Event handler whenever a checkbox is changed
  const handleChange = (evt) => {
    const value = evt.target.checked;
    setState({ ...state, [evt.target.name]: value });
    // console.log(data)
  };

  // Add user preferences to session storage
  const sendUserInfo = () => {
    sessionStorage.setItem("Orchid", JSON.stringify(state.Orchid));
    sessionStorage.setItem("hyacinth", JSON.stringify(state.hyacinth));
    sessionStorage.setItem("lilly", JSON.stringify(state.lilly));
    alert("Succesfully updated your flower preferences!");
  };

  return (
    <div className="customer">
      <h1 className="customerTitle">{t("Title")}</h1>
      <div className="customerContainer">
        <p className="instructions">{t("preferencesText")}</p>
        <div className="checkbox-wrapper">
          <label>
            {t("Orchid")}
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.Orchid}
              name="Orchid"
            />
          </label>
          <label>
            {t("Hyacinth")}
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.hyacinth}
              name="hyacinth"
            />
          </label>
          <label>
            {t("Lilly")}
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.lilly}
              name="lilly"
            />
          </label>
          <button className="btn" onClick={sendUserInfo}>
            {t("preferencesButton")} 
          </button>
        </div>
      </div>
    </div>
  );
};
