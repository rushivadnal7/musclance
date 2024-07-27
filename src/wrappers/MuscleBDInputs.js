import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  padding: 20px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    height: 10%;
  }

  .back-arrow {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      padding: 10px;
      height: 50px;
      width: 50px;
    }
  }

  .progress-bar {
    width: 80%;
    height: 0.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }

  .progress-bar-inner {
    height: 100%;
    border-radius: 20px;
    width: 25%;
    background-color: var(--third-color);
  }

  .button {
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .error-container {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    color: var(--off-red);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: var(--silver);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    z-index: 1000;

    span{
      margin: 1rem;
      font-size: 1.3rem;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.4;
  filter: blur(5px);
`;
