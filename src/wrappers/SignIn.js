import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary);
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .main-container{
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    position: relative;


    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: flex;
      width: 70%;
      height: 95%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
    }
  }

  .header-container {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--seasalt);
    align-items: start; 
    padding: 0px 50px;
    color: var(--primary);
    border-radius: 0px 0px 5px 80px;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: 100%;
      width: 50%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
      height: 100%;
      width: 50%;
      border-radius: 0px;
    }
  }

  .arrow {
    font-size: 2rem;
    font-weight: 600;
  }
  .container-text :nth-child(1) {
    font-size: 2rem;
    font-weight: 600;
    display: block;
  }

  form {
    height: 75%;
    width: 100%;
    padding: 0px 40px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: 100%;
      width: 50%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 100%;
      width: 50%;
    }
  }

  .container {
    width: 100%;
    height: 100%;
  }

  .inputs-container {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .submit-elements {
    height: 30%;
  }

  .input-elements {
    background-color: transparent;
    color: var(--seasalt);
    height: 2.5rem;
    width: 100%;
    margin: 5px 0px;
    padding: 20px 15px;
    border-bottom: 1px solid var(--cadet-gray);
  }

  .password-div {
    display: flex;
    position: relative;
    align-items: center;
  }

  .password-div svg {
    position: absolute;
    right: 10px;
  }

  .forgot-password {
    display: flex;
    margin: 1rem 0px;
    justify-content: end;
  }

  .error-container {
    position: absolute;
    top: 30%; /* Position the error container within the top 30% of the viewport */
    left: 50%;
    transform: translateX(-50%);
    color: var(--seasalt);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: var(--silver);
    padding: 1rem; /* Add padding for better appearance */
    border-radius: 8px; /* Add border radius for rounded corners */
    text-align: center;
    z-index: 1000; /* Ensure it appears above other content */
  }

  .error-container svg {
    color: var(--off-red);
  }

  .error-message {
    color: var(--seasalt);
    font-size: larger;
    font-weight: 600;
    margin: 1rem;
    text-align: justify;
  }
`;
