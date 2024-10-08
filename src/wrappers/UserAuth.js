import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: var(--primary);
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
  }

  .main-container {
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    position: relative;


    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 70%;
      display: flex;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
    }
  }

  .images-container {
    height: 80%;
    width: 100%;
    position: relative;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: 100%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 100%;
    }
  }

  .images-container img {
    height: 100%;
    width: 100%;
    transition: opacity 1s ease-in-out;
  }

  .images-container img.active {
    opacity: 1;
  }

  .dots-container {
    position: absolute;
    bottom: 100px;
    width: 100%;
    text-align: center;
  }

  .dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    border: 1px solid var(--seasalt);
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .dot.active {
    background-color: var(--seasalt);
  }

  .text-message {
    position: absolute;
    font-size: 2rem;
    font-weight: bold;
    left: 10%;
    top: 55%;
  }

  .auth-selection-container {
    border-radius: 5px 80px 0px 0px;
    position: absolute;
    bottom: 0;
    height: 30%;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--third-color);

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      position: static;
      border-radius: 0px;
      height: 100%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      position: static;
      border-radius: 0px;
      height: 100%;
    }
  }

  .content-div {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .icon-content {
    width: 100%;
    font-size: 3rem;
    font-weight: bolder;
  }

  .login-navigate-text {
    font-size: 1.1rem;
    font-weight: 600;
    align-self: flex-end;
    display: flex;
    gap: 5px;
  }

  @media (max-width: 426px) {
    .main-container {
      height: calc(var(--vh, 1vh) * 100);
    }
  }
`;

export default Wrapper;
