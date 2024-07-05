import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../wrappers/UserAuth";
import slider_image_2 from "../assets/auth_image_2.jpeg";
import slider_image_1 from "../assets/auth_image_1.jpeg";
import slider_image_3 from "../assets/auth_image_3.jpeg";
import Button from "../components/Button";

const UserAuth = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [slider_image_1, slider_image_2, slider_image_3];

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval.current);
  }, [images.length]);

  return (
    <Wrapper>
      <div className="main-container">
        <div className="images-container">
          <span className="text-message">Start tracking your workout</span>

          <img src={images[currentImageIndex]} alt="slide-image" />

          <div className="dots-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="auth-selection-container text-black">
          <div className="content-div">
            <span className="text-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
              tempore!
            </span>
            <Button className="long-button" text="sign in" />
            <div className="login-navigate-text">
              <span className="">or create account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserAuth;
