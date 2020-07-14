import React, { useState } from "react";

const Form = (props) => {
  //   const { inputs, setInputs } = props;
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      hasBeenSubmitted,
    };
    console.log("Welcome", newUser);
    setHasBeenSubmitted(true);
  };

  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for submitting the form!";
    } else {
      return "Welcome, please submit the form";
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First name is required!");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First name must be at least 3 characters!");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last name is required!");
    } else if (e.target.value.length < 3) {
      setLastNameError("Last name must be 3 characters or longer!");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 3) {
      setEmailError("Email must be 3 characters or longer!");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 3) {
      setPasswordError("Password must be 3 characters or longer!");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmPasswordError("Confirm password is required!");
    } else if (e.target.value.length < 3) {
      setConfirmPasswordError(
        "Confirm password must be 3 characters or longer!"
      );
    }
  };

  // return form
  return (
    <form onSubmit={createUser}>
      <h3>{formMessage()}</h3>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={handleFirstName}
          type="text"
          name="firstName"
          id="firstName"
        />
        {firstNameError ? <p stype={{ color: "red" }}>{firstNameError}</p> : ""}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={handleLastName}
          type="text"
          name="lastName"
          id="lastName"
        />
        {lastNameError ? <p stype={{ color: "red" }}>{lastNameError}</p> : ""}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input onChange={handleEmail} type="text" name="email" id="email" />
        {emailError ? <p stype={{ color: "red" }}>{emailError}</p> : ""}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          id="password"
        />
        {passwordError ? <p stype={{ color: "red" }}>{passwordError}</p> : ""}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          onChange={handleConfirmPassword}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
        {confirmPasswordError ? (
          <p stype={{ color: "red" }}>{confirmPasswordError}</p>
        ) : (
          ""
        )}
      </div>
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default Form;
