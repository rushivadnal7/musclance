import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .background-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
  }

  .logo {
    width: max-content;
    height: max-content;
    img {
      width: 100px;
      height: 80px;
    }
  }

  .content {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }

  .content :nth-child(1) {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px;
  }

  .content :nth-child(2) {
    font-size: medium;
    font-weight: 500;
    margin: 10px;
    color: var(--cadet-gray);
  }

  .slider-platform {
    display: flex;
    width: 100%;
    height: 5rem;
    position: relative;
    border-radius: 50px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .start-button {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    border-radius: 40px;
    padding: 15px 20px;
    width: 130px;
    background-color: var(--seasalt);
    color: var(--primary);
    font-size: 1.3rem;
    font-weight: 600;
    touch-action: none;
    user-select: none;
    z-index: 100;
  }

  .arrow-container {
    width: max-content;
    display: flex;
    width: max-content;
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    z-index: 1;
  }

  .arrow-container:nth-child(n + 1) {
    color: grey;
  }

  .arrow-container :nth-child(n + 2) {
    color: darkgray;
  }

  .arrow-container :nth-child(n + 3) {
    color: var(--seasalt);
  }
`;
