import React from "react";
import "./Customer.css";

export const Customer = () => {
  // State used to track user preferences
  const [state, setState] = React.useState({
    lactose: JSON.parse(sessionStorage.getItem("lactoseFree")) || false,
    nuts: JSON.parse(sessionStorage.getItem("nutFree")) || false,
    organic: JSON.parse(sessionStorage.getItem("organic")) || false,
  });

  // Event handler whenever a checkbox is changed
  const handleChange = (evt) => {
    const value = evt.target.checked;
    setState({ ...state, [evt.target.name]: value });
    // console.log(data)
  };

  // Add user preferences to session storage
  const sendUserInfo = () => {
    sessionStorage.setItem("lactoseFree", JSON.stringify(state.lactose));
    sessionStorage.setItem("nutFree", JSON.stringify(state.nuts));
    sessionStorage.setItem("organic", JSON.stringify(state.organic));
    alert("Updated your dietary restrictions!");
  };

  return (
    <div className="customer">
      <h1 className="customerTitle">Dietary Restrictions</h1>
      <div className="customerContainer">
        <p className="instructions">If applicable, please select one or more of the dietary restrictions below</p>
        <div className="checkbox-wrapper">
          <label>
            Would you like to see our lactose-free products?
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.lactose}
              name="lactose"
            />
          </label>
          <label>
            Would you like to see our nut-free products?
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.nuts}
              name="nuts"
            />
          </label>
          <label>
            Would you like to see our organic products?
            <input
              className="customerInput"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.organic}
              name="organic"
            />
          </label>
          <button className="btn" onClick={sendUserInfo}>
            Update Dietary Restrictions
          </button>
        </div>
      </div>
    </div>
  );
};
