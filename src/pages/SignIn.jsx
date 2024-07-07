import React from "react";
import { Wrapper } from "../wrappers/SignIn";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();


  const handleSubmit = () => {

  }

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
              width='36'
              height='36'
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
          <div className="container-text">
            <span>
              Welcome <br /> Back!
            </span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
          <form onSubmit={handleSubmit}>
            <div className="">
              
            </div>
          </form>
       
      </Wrapper>
    </>
  );
};

export default SignIn;
