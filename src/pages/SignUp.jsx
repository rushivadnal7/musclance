import React, { useState } from "react";
import { Wrapper } from "../wrappers/SignUp";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    height: { feet: "", inches: "" },
    weight: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const onHeightChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      height: { ...formdata.height, [name]: value },
    });
  };

  const validate = () => {
    const errors = {};
    if (!formdata.name) errors.name = "Full Name is required";
    if (!formdata.email) errors.email = "Email is required";
    if (!formdata.phone) errors.phone = "Phone Number is required";
    if (!formdata.height.feet || !formdata.height.inches)
      errors.height = "Height is required";
    if (!formdata.weight) errors.weight = "Weight is required";
    if (!formdata.age) errors.age = "Age is required";
    if (!formdata.gender) errors.gender = "Gender is required";
    if (!formdata.password) errors.password = "Password is required";
    if (formdata.password !== formdata.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log("FormData : ", formdata);
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <Wrapper>
        <div className="header-container">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              width="36"
              height="36"
              stroke="currentColor"
              className="size-12 arrow"
              onClick={() => navigate("/")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </span>
          <span>
            Create <br /> Account
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputs-container">
            <input
              className="input-elements"
              type="text"
              placeholder="Full Name"
              onChange={onChangeHandler}
              name="name"
              id="name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
            <input
              className="input-elements"
              type="text"
              placeholder="Email"
              onChange={onChangeHandler}
              name="email"
              id="email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            <input
              className="input-elements"
              type="number"
              placeholder="Phone Number"
              onChange={onChangeHandler}
              name="phone"
              id="number"
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}

            <div className="height-weight-inputs ">
              <div className="height-group">
                <label htmlFor="height">Height : </label>
                <input
                  className="input-elements feet-inputs"
                  type="number"
                  name="feet"
                  id="feet"
                  onChange={onHeightChangeHandler}
                  placeholder="feet"
                  max={8}
                  min={2}
                />
                <input
                  className="input-elements feet-inputs"
                  type="number"
                  name="inches"
                  id="inches"
                  placeholder="inches"
                  onChange={onHeightChangeHandler}
                  max={12}
                  min={0}
                />
                {errors.height && (
                  <span className="error-text">{errors.height}</span>
                )}
              </div>

              <div className="weight-group">
                <label htmlFor="weight">Weight : </label>
                <input
                  className="input-elements feet-inputs"
                  type="number"
                  name="weight"
                  onChange={onChangeHandler}
                  id="weight"
                  max={70}
                  min={7}
                />
                {errors.weight && (
                  <span className="error-text">{errors.weight}</span>
                )}
              </div>
            </div>
            <div className="age-gender-inputs">
              <div className="age-group">
                <label htmlFor="age">Age : </label>
                <input
                  className="input-elements"
                  type="number"
                  name="age"
                  onChange={onChangeHandler}
                  id="age"
                  max={70}
                  min={7}
                />
                {errors.age && <span className="error-text">{errors.age}</span>}
              </div>
              <div className="gender-group">
                <label htmlFor="gender">Gender : </label>
                <select
                  className="input-elements"
                  name="gender"
                  onChange={onChangeHandler}
                  id="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <span className="error-text">{errors.gender}</span>
                )}
              </div>
            </div>

            <input
              className="input-elements"
              type="password"
              placeholder="Password"
              onChange={onChangeHandler}
              name="password"
              id="password"
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
            <input
              className="input-elements"
              type="password"
              placeholder="Confirm Password"
              onChange={onChangeHandler}
              name="confirmPassword"
              id="confirm-password"
            />
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
            <Button
              width="100"
              type="submit"
              text="Sign Up"
              bgcolor="secondary"
              className="long-button"
            />
            <div className="signin-group">
              <span>Already have an account?</span>
              <span>Sign In</span>
            </div>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default SignUp;
