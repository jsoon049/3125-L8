import React from "react";
import "./Customer.css";

export const Customer = () => {
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
      <h1 className="customerTitle">Welcome to Flower Express</h1>
      <div className="customerContainer">
        <p className="instructions">If applicable, please one or more flower preferences below</p>
        <div className="checkbox-wrapper">
          <label>
            Would you like to see our selection of orchids?
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.Orchid}
              name="Orchid"
            />
          </label>
          <label>
            Would you like to see our selection of hyacinths?
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.hyacinth}
              name="hyacinth"
            />
          </label>
          <label>
            Would you like to see our selection of lillies?
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.lilly}
              name="lilly"
            />
          </label>
          <button className="btn" onClick={sendUserInfo}>
            Update Flower Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
