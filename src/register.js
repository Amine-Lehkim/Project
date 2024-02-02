import React, { useState } from "react";
import "./App.css"; 

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    realName: "",
    username: "",
    password: "",
    verifyPassword: "",
    agreeTerms: false,
  });
  const [registerError, setRegisterError] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (
      !registerData.email ||
      !registerData.realName ||
      !registerData.username ||
      !registerData.password ||
      !registerData.verifyPassword ||
      !registerData.agreeTerms
    ) {
      setRegisterError("Please complete the registration form.");
      return;
    }

    // Perform registration logic here (e.g., API call)
    // If successful, redirect or handle accordingly
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setRegisterData({ ...registerData, [e.target.name]: value });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registerData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="realName">Real Name:</label>
          <input
            type="text"
            id="realName"
            name="realName"
            value={registerData.realName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registerData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="verifyPassword">Verify Password:</label>
          <input
            type="password"
            id="verifyPassword"
            name="verifyPassword"
            value={registerData.verifyPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={registerData.agreeTerms}
            onChange={handleInputChange}
          />
          <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
        </div>
        {registerError && <p className="form-error">{registerError}</p>}
        <button className="form-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
