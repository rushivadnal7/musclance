import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Bar = styled.div`
  width: ${(props) => props.width}%;
  height: 1.5rem;
  background-color: var(--seasalt);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  .percent-div {
    background-color: green;
    width: ${(props) => props.percent}%;
    height: 100%;
    transition: width 0.1s linear;
  }

  span {
    position: absolute;
    width: fit-content;
    z-index: 3;
  }
`;

const ProgressBar = ({ width, maxValue , onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const duration = maxValue * 1000; // Convert maxValue to milliseconds
    const intervalTime = 50; // Interval time in milliseconds
    const increment = 100 / (duration / intervalTime); // Increment percentage per interval

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [maxValue , onComplete]);

  return (
    <Bar width={width} percent={percent}>
      <div className="percent-div"></div>
    </Bar>
  );
};

export default ProgressBar;
