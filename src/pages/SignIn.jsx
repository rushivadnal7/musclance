import React, { useState } from "react";
import { Wrapper } from "../wrappers/SignIn";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [ViewPassword, setViewPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [disableInputs, setDisableInputs] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Please enter Email";
    }
    if (!formData.password) {
      errors.password = "Please enter Password";
    }

    return errors;
  };

  const viewPasswordToggler = () => {
    setViewPassword(!ViewPassword);
    console.log(ViewPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length === 0) {
      navigate("/home");
    } else {
      setErrors(errors);
      setShowErrors(true);
      setDisableInputs(true);
    }

    console.log(formData);
  };

  const progresBarHandler = () => {
    setShowErrors(false);
    setDisableInputs(false);
  };

  return (
    <>
      <Wrapper>
        {showErrors && (
          <div className="error-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>

            {Object.keys(errors).length > 0 && (
              <div className="error-message">
                {Object.values(errors).map((error, index) => (
                  <>
                    <span key={index}>{`${index + 1}. ${error}`}</span> <br />
                  </> 
                ))}
              </div>
            )}
            <ProgressBar
              maxValue={5}
              width={"100"}
              onComplete={progresBarHandler}
            />
          </div>
        )}
        <div className="main-container">
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
            <div className="container-text">
              <span>
                Welcome Back to <br /> Fatigued!
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs-container">
              <input
                className="input-elements"
                type="email"
                placeholder="Email"
                onChange={onChangeHandler}
                name="email"
                id="email"
              />

              <div className="password-div">
                <input
                  className="input-elements"
                  type={`${ViewPassword ? "text" : "password"}`}
                  placeholder="Password"
                  onChange={onChangeHandler}
                  name="password"
                  id="password"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-6 ${ViewPassword ? "block" : "hidden"}`}
                  onClick={viewPasswordToggler}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`size-6 ${ViewPassword ? "hidden" : "block"}`}
                  onClick={viewPasswordToggler}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
            </div>
            <div className="submit-elements">
              <Button
                width="100"
                type="submit"
                text="Sign Up"
                bgcolor="secondary"
                className="long-button"
              />
              <div className="forgot-password">
                <span onClick={() => navigate("/signup")}>
                  forgot password?
                </span>
              </div>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default SignIn;
