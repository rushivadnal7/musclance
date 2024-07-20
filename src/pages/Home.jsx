import React from "react";
import { Content, Wrapper } from "../wrappers/Home";

import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavbar";

const Home = () => {
  return (
    <>
      <Wrapper>
        {/* <NavBar /> */}
        <Content>
          <div className="muscle-group-selectors">
            <div className="chest-selector">Chest</div>
            <div className="back-selector">Back</div>
            <div className="triceps-selector">triceps</div>
            <div className="biceps-selector">biceps</div>
            <div className="legs-selector">Legs</div>
            <div className="shoulder-selector">Shoulder</div>
          </div>
        </Content>
        <MobileNavbar/>
      </Wrapper>
    </>
  );
};

export default Home;
