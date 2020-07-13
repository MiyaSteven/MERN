import React from "react";

const Form = (props) => {
  const { inputs, setInputs } = props;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={onChange}
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input onChange={onChange} type="text" name="lastName" id="lastName" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input onChange={onChange} type="text" name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          onChange={onChange}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          onChange={onChange}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
    </form>
  );
};

export default Form;
