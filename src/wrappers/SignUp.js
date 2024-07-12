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
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }

  .main-container {
    width: 100%;
    height: 100%;

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
    border-radius: 0px 0px 0px 80px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: 100%;
      width: 50%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 100%;
      width: 50%;
      border-radius: 0px;
    }
  }

  .header-container span{
    font-size: 3rem;
    font-weight: bolder;
  }

  .arrow {
    font-size: 2rem;
    font-weight: 600;
  }
  .header-container :nth-child(2) {
    font-size: 2rem;
    font-weight: 600;
  }

  form {
    height: 75%;
    width: 100%;

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
    padding: 0px 40px;
  }

  .inputs-container {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .height-weight-inputs,
  .age-gender-inputs {
    display: flex;
    /* width: 1rem; */
    justify-content: space-between;
    align-items: center;
    color: var(--seasalt);
  }

  .feet-inputs {
    width: 3rem;
    margin: 0.5rem;
    background-color: var(--seasalt);
  }

  #feet,
  #inches,
  #weight,
  #age,
  #gender {
    margin-left: 0.5rem;
  }

  #name,
  #email,
  #number,
  #password,
  #confirm-password {
    padding: 20px 15px;
  }

  .input-elements {
    background-color: transparent;
    color: var(--seasalt);
    height: 2.5rem;
    margin: 5px 0px;
    border-bottom: 1px solid var(--cadet-gray);
  }

  .signin-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    cursor: pointer;
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
