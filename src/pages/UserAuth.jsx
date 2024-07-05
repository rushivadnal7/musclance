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
            <button>sign in</button>
            <span>or create account</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserAuth;
