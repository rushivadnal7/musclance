import React from "react";
import { Wrapper } from "../wrappers/SignUp";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {};

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
              name="name"
              id="name"
            />
            <input
              className="input-elements"
              type="text"
              placeholder="Email"
              name="email"
              id="email"
            />
            <input
              className="input-elements"
              type="number"
              placeholder="Phone Number"
              name="number"
              id="number"
            />

            <div className="height-weight-inputs ">
              <div className="height-group">
                <label htmlFor="height">Height : </label>
                <input
                  className="input-elements feet-inputs"
                  type="number"
                  name="height"
                  id="feet"
                  defaultValue={5}
                  max={8}
                  min={2}
                />
                <input
                  className="input-elements feet-inputs"
                  type="number"
                  name="height"
                  id="inches"
                  defaultValue={10}
                  max={12}
                  min={0}
                />
              </div>

              <div className="weight-group">
                <label htmlFor="weight">Weight : </label>
                <input
                  className="input-elements feet-inputs"
                  type="number"
                  name="weight"
                  id="weight"
                  defaultValue={60}
                  max={70}
                  min={7}
                />
              </div>
            </div>
            <div className="age-gender-inputs">
              <div className="age-group">
                <label htmlFor="age">Age : </label>
                <input
                  className="input-elements"
                  type="number"
                  name="age"
                  id="age"
                  defaultValue={22}
                  max={70}
                  min={7}
                />
              </div>
              <div className="gender-group">
                <label htmlFor="gender">Gender : </label>
                <select className="input-elements" name="gender" id="gender">
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
            </div>

            <input
              className="input-elements"
              type="password"
              placeholder="password"
              name="password"
              id="password"
            />
            <input
              className="input-elements"
              type="password"
              placeholder="Confirm Password"
              name="confirm-password"
              id="confirm-password"
            />
            <Button
              width="100"
              text="Sign Up"
              bgcolor="secondary"
              className="long-button"
            />
            <div className="signin-group">
                <span>Already have an account?</span>
                <span>sign in</span>
            </div>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default SignUp;
