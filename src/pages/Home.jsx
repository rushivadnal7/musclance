import React from "react";
import { Content, Wrapper } from "../wrappers/Home";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavbar";
import icon from '../assets/logo_icon.png'


const Home = () => {
  const navigate = useNavigate()
  const clickHandler = (navigateTo) => {
    navigate(`/${navigateTo}`)
  }

  return (
    <>
      <Wrapper>
        <Content>
          <div className="icon">
            <img src={icon} alt="icon-image" />
          </div>
          <h1 className="welcome-text">Welcome,</h1>
          <div className="container">
            <div className="calculator" onClick={() => clickHandler('musclebreakdown')}>
              <h1>Muscle Breakdown</h1>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="calculator" onClick={() => clickHandler('musclebreakdown')}>
              <h1>Calorie counter</h1>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </Content>
        <MobileNavbar />
      </Wrapper>
    </>
  );
};

export default Home;
