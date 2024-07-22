import React from "react";
import { Content, Wrapper } from "../wrappers/Home";

import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavbar";

// const CalculatorType = () => {
//   return (
//     <>
//       <CalculatorType>

//       </CalculatorType>
//     </>
//   );
// };

const Home = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <h1 className="welcome-text">Welcome back,</h1>
          <div className="container">
            <div className="calculator">
              <h1>Muscle Breakdown</h1>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="calculator">
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
