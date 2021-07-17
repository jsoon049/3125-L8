import React from "react";
import ReactDOM from "react-dom";
import "./WizardForm.css";
// import "react-datepicker/dist/react-datepicker.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

class WizardForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      currentStep: 1,
      currentStepInfo: "Contact Info",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      time: "",
      daysOfWeek: [1, 3],
      selectedDay: "",
      cardholder: "",
      cardnumber: "",
      carddate: "",
      cardccv: "",
      errors: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalcode: "",
        time: "",
        selectedDay: "",
        cardholder: "",
        cardnumber: "",
        carddate: "",
        cardccv: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      // ** Booking Info ** //
      case "firstname":
        let validfirstNameRegex = RegExp(/^[a-z][a-z]*$/);
        if (value === "") errors.firstname = "Field cannot be empty";
        else
          errors.firstname = validfirstNameRegex.test(value.toLowerCase())
            ? ""
            : "First Name can only contain letters";
        break;
      case "lastname":
        let validlastNameRegex = RegExp(/^[a-z][a-z]*$/);
        if (value === "") errors.lastname = "Field cannot be empty";
        else
          errors.lastname = validlastNameRegex.test(value.toLowerCase())
            ? ""
            : "Last Name can only contain letters";
        break;
      case "email":
        let validEmailRegex = RegExp(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ // eslint-disable-line
        );
        if (value === "") errors.email = "Field cannot be empty";
        else
          errors.email = validEmailRegex.test(value)
            ? ""
            : "Invalid email address!";
        break;
      // ** Address Info ** //
      case "address":
        if (value === "") errors.address = "Field cannot be empty";
        else errors.address = "";
        break;
      case "city":
        let validCityRegex = RegExp(/^[a-z][a-z]*$/);
        if (value === "") errors.city = "Field cannot be empty";
        else
          errors.city = validCityRegex.test(value.toLowerCase())
            ? ""
            : "City can only contain letters";
        break;
      case "postalcode":
        let validPostalCodeRegex = RegExp(
          /\b(?!.{0,7}[DFIOQU])[A-VXY]\d[A-Z][^-\w\d]\d[A-Z]\d\b/
        );
        if (value === "") errors.postalcode = "Field cannot be empty";
        else
          errors.postalcode = validPostalCodeRegex.test(value)
            ? ""
            : "Invalid Postal Code! Please use XXX XXX format";
        break;
      // ** Date & Time Info ** //
      case "phone":
        let validPhoneRegex = RegExp(
          /^(\+0?1\s)?\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}$/
        );
        if (value === "") errors.phone = "Field cannot be empty";
        else
          errors.phone = validPhoneRegex.test(value)
            ? ""
            : "Invalid format! Please use (xxx) xxx-xxxx format";
        break;
      case "time":
        let hr = value.substring(0, 2);
        let min = value.substring(3, 5);
        if (Number(hr.substring(0, 1)) === 0) hr = hr.substring(1, 2);
        hr = Number(hr);
        if (hr < 8 || hr > 19)
          errors.time = "Time can only be between 8am and 7pm";
        else if (hr >= 19 && min > 0)
          errors.time = "Time can only be between 8am and 7pm";
        else errors.time = "";
        break;
      // ** Payment Info ** //
      case "cardholder":
        let validCardNameRegex = RegExp(/^[a-z][a-z\s]*$/);
        if (value === "") errors.cardholder = "Field cannot be empty";
        else
          errors.cardholder = validCardNameRegex.test(value.toLowerCase())
            ? ""
            : "Name can only contain letters and spaces";
        break;
      case "cardnumber":
        let validCardNumRegex = RegExp(/^(?:\d{4} ){3}\d{4}$/);
        if (value === "") errors.cardnumber = "Field cannot be empty";
        else
          errors.cardnumber = validCardNumRegex.test(value)
            ? ""
            : "Invalid format! Please use xxxx xxxx xxxx xxxx format";
        break;
      case "carddate":
        let validDateRegex = RegExp(/^[\d]{2}\/[\d]{2}/);
        let month = value.substring(0, 2);
        if (value === "") errors.carddate = "Field cannot be empty";
        else if (!isNaN(month) && month > 12)
          errors.carddate = "Month cannot be greater than 12";
        else
          errors.carddate = validDateRegex.test(value)
            ? ""
            : "Invalid format! Please use MM/YY format";
        break;
      case "cardccv":
        let validCCVRegex = RegExp(/^[0-9]{3}$/);
        if (value === "") errors.cardccv = "Field cannot be empty";
        else
          errors.cardccv = validCCVRegex.test(value)
            ? ""
            : "CCV must be 3 numbers only";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput().value;
    console.log(input);
    this.setState({ selectedDay: input });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors) && this.notEmpty() === true) {
      alert(`Success! Here are your order details!: \n 
        Name: ${this.state.firstname}  ${this.state.lastname} \n 
        Phone: ${this.state.phone} \n
        Address: ${this.state.address} \n
        Delivery Date: ${this.state.selectedDay} \n 
        Delivery Time: ${this.state.time}`);
    } else {
      event.preventDefault();
      if (this.notEmpty() === false) {
        alert("Error: Make sure all fields are filled in!");
      } else {
        alert("Error: Please correct the errors in the form!");
      }
    }
  };
  _next = () => {
    if (this.validateForm(this.state.errors) === true) {
      let currentStep = this.state.currentStep;
      currentStep = currentStep + 1;
      this.setState({ currentStep: currentStep }, () => {
        this.updateStepInfo();
      });
    } else {
      alert("Error: Please correct the errors in the form!");
    }
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep: currentStep }, () => {
      this.updateStepInfo();
    });
  };

  updateStepInfo = () => {
    let currentStep = this.state.currentStep;
    if (currentStep === 1) this.setState({ currentStepInfo: "Contact Info" });
    if (currentStep === 2) this.setState({ currentStepInfo: "Address" });
    if (currentStep === 3) this.setState({ currentStepInfo: "Date & Time" });
    if (currentStep === 4) this.setState({ currentStepInfo: "Payment Info" });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn previous" type="button" onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button className="btn" type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 4) {
      return (
        <button className="btn" type="submit">
          Submit
        </button>
      );
    }
    return null;
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  notEmpty() {
    let disable =
      this.state.firstname !== "" &&
      this.state.lastname !== "" &&
      this.state.email !== "" &&
      this.state.phone !== "" &&
      this.state.time !== "" &&
      this.state.selectedDay !== "" &&
      this.state.cardholder !== "" &&
      this.state.cardnumber !== "" &&
      this.state.carddate !== "" &&
      this.state.cardccv !== "";
    return disable;
  }

  render() {
    return (
      <div className="wizardform">
        <React.Fragment>
          {/* <h1>React Wizard Form </h1> */}
          <h2 className="steptitle">
            Step {this.state.currentStep} {"-"} {this.state.currentStepInfo}
          </h2>

          <form onSubmit={this.handleSubmit}>
            {/* render the form steps and pass required props in */}
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              email={this.state.email}
              phone={this.state.phone}
              errors={this.state.errors}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleDayChange={this.handleDayChange}
              selectedDay={this.state.selectedDay}
              daysOfWeek={this.state.daysOfWeek}
              errors={this.state.errors}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleDayChange={this.handleDayChange}
              selectedDay={this.state.selectedDay}
              daysOfWeek={this.state.daysOfWeek}
              errors={this.state.errors}
            />
            <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              cardholder={this.state.cardholder}
              cardnumber={this.state.cardnumber}
              carddate={this.statecarddate}
              cardccv={this.state.cardccv}
              errors={this.state.errors}
            />
            <div className="btn-wrapper">
              <button className="btn" type="reset">
                Clear
              </button>
              <div>
                {this.previousButton()}
                {this.nextButton()}
                {this.submitButton()}
              </div>
            </div>
          </form>
        </React.Fragment>
      </div>
    );
  }
}

export default WizardForm;

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <p className="stepinstructions">Please enter your contact info below </p>
      <div className="booking-wrapper">
        <div className="booking-outer">
          <div className="booking-inner">
            <label className="booking-form-label">
              First Name
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="firstname"
              className="booking-input"
              required
              placeholder="John"
              onChange={props.handleChange}
              noValidate
            />
            {props.errors.firstname.length > 0 && (
              <span className="error">{props.errors.firstname}</span>
            )}
          </div>
          <div className="booking-inner">
            <label className="booking-form-label">
              Last Name
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="lastname"
              className="booking-input"
              required
              placeholder="Doe"
              onChange={props.handleChange}
              noValidate
            />
            {props.errors.lastname.length > 0 && (
              <span className="error">{props.errors.lastname}</span>
            )}
          </div>
        </div>
        <div className="booking-outer">
          <div className="booking-inner">
            <label className="booking-form-label">
              Email
              <strong className="required"> *</strong>
            </label>
            <input
              type="email"
              name="email"
              className="booking-input"
              required
              placeholder="email@example.com"
              onChange={props.handleChange}
              value={props.email}
              noValidate
            />
            {props.errors.email.length > 0 && (
              <span className="error">{props.errors.email}</span>
            )}
          </div>
          <div className="booking-inner last">
            <label className="booking-form-label">
              Phone Number
              <strong className="required"> *</strong>
            </label>
            <input
              type="tel"
              name="phone"
              className="booking-input"
              required
              placeholder="(xxx) xxx-xxxx"
              onChange={props.handleChange}
              value={props.phone}
              noValidate
            />
            {props.errors.phone.length > 0 && (
              <span className="error">{props.errors.phone}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="booking" id="booking">
      <p className="stepinstructions">
        Please enter the delivery address below{" "}
      </p>
      <div className="booking-wrapper">
        <div className="booking-outer">
          <div className="booking-inner">
            <label className="booking-form-label">
              Address
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="address"
              className="booking-input"
              required
              placeholder="75 Laurier Avenue East"
              onChange={props.handleChange}
              noValidate
            />
            {props.errors.address.length > 0 && (
              <span className="error">{props.errors.address}</span>
            )}
          </div>
        </div>
        <div className="booking-inner last">
          <label className="booking-form-label">
            City
            <strong className="required"> *</strong>
          </label>
          <input
            type="text"
            name="city"
            className="booking-input"
            required
            placeholder="Ottawa"
            onChange={props.handleChange}
            noValidate
          />
          {props.errors.city.length > 0 && (
            <span className="error">{props.errors.city}</span>
          )}
        </div>
        <div className="booking-outer">
          <div className="booking-inner">
            <label className="booking-form-label">
              Postal Code
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="postalcode"
              className="booking-input"
              required
              placeholder="K1N 6N5"
              onChange={props.handleChange}
              noValidate
            />
            {props.errors.postalcode.length > 0 && (
              <span className="error">{props.errors.postalcode}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="booking-outer">
      <p className="stepinstructions">
        Please select a time and date for your delivery{" "}
      </p>
      <div className="booking-inner">
        <label className="booking-form-label">
          Date
          <strong className="required"> *</strong>
        </label>
        <div>
          <DayPickerInput
            name="day"
            className="calendar date-time"
            inputProps={{ className: "calendar" }}
            onDayChange={props.handleDayChange}
            value={props.selectedDay}
            dayPickerProps={{
              modifiers: {
                disabled: [
                  { daysOfWeek: props.daysOfWeek },
                  { before: new Date() },
                ],
              },
            }}
          />
          {props.errors.selectedDay.length > 0 && (
            <span className="error">{props.errors.selectedDay}</span>
          )}
        </div>
      </div>
      <div className="booking-inner last">
        <label className="booking-form-label">
          Time
          <strong className="required"> *</strong>
        </label>
        <input
          type="time"
          name="time"
          className="booking-input date-time"
          placeholder="hh-mm"
          required
          onChange={props.handleChange}
        />
        {props.errors.time.length > 0 && (
          <span className="error">{props.errors.time}</span>
        )}
      </div>
    </div>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div className="confirm-appt">
      <p className="stepinstructions">
        Due to the event of last-minute cancellations we require all patients to
        pay online to confirm their order. Any cancellation done at least 48
        hours before the scheduled delivery will be fully reimbursed.
      </p>
      <div className="booking-outer">
        <div className="booking-inner">
          <label className="booking-form-label">
            Cardholder Name
            <strong className="required"> *</strong>
          </label>
          <input
            type="text"
            name="cardholder"
            size="20"
            className="booking-input"
            required
            placeholder="John Doe"
            onChange={props.handleChange}
            noValidate
          />
          {props.errors.cardholder.length > 0 && (
            <span className="error">{props.errors.cardholder}</span>
          )}
        </div>
        <div className="booking-inner last">
          <label className="booking-form-label">
            Credit/Debit Card Number
            <strong className="required"> *</strong>
          </label>
          <input
            type="text"
            name="cardnumber"
            size="20"
            className="booking-input"
            required
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={props.handleChange}
            noValidate
            maxLength="19"
          />
          {props.errors.cardnumber.length > 0 && (
            <span className="error">{props.errors.cardnumber}</span>
          )}
        </div>
      </div>
      <div className="booking-outer">
        <div className="booking-inner">
          <label className="booking-form-label">
            Expiration Date
            <strong className="required"> *</strong>
          </label>
          <input
            type="text"
            name="carddate"
            size="20"
            className="booking-input"
            required
            placeholder="MM/YY"
            onChange={props.handleChange}
            noValidate
            maxLength="5"
          />
          {props.errors.carddate.length > 0 && (
            <span className="error">{props.errors.carddate}</span>
          )}
        </div>
        <div className="booking-inner last">
          <label className="booking-form-label">
            CCV
            <strong className="required"> *</strong>
          </label>
          <input
            type="text"
            name="cardccv"
            size="20"
            className="booking-input"
            required
            placeholder="xxx"
            onChange={props.handleChange}
            noValidate
            maxLength="3"
          />
          {props.errors.cardccv.length > 0 && (
            <span className="error">{props.errors.cardccv}</span>
          )}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<WizardForm />, document.getElementById("root"));
