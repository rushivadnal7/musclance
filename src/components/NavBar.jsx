import React, { useState } from "react";
import { Wrapper } from "../wrappers/Navbar";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate()
  const [menuToggle, setMenuToggle] = useState(false);

  const HandleMenuToggle = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  return (
    <>
      <Wrapper>
        <span className="icon">Fatigued</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 open-menu"
          onClick={HandleMenuToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>

        <div
          className={`navigate-container ${menuToggle ? "block" : "hidden"}`}
        >
          <div className="close-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10"
              onClick={HandleMenuToggle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>

          <div className="menu-container">
            <ul>
              <li>home</li>
              <li>history</li>
              <li>about</li>
              <li>contact</li>
            </ul>
            <Button
              onClick={()=> navigate('/') }
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>
              }
              className="small-button"
              text="logout"
              width="100"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NavBar;
