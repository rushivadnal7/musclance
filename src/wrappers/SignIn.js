import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary);
  position: relative;

  .header-container {
    width: 100%;
    height: 25%;
    /* position: absolute;
        top: 0; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--seasalt);
    align-items: start;
    padding: 0px 50px;
    color: var(--primary);
    border-radius: 0px 0px 5px 80px;
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
  }

  .container {
    width: 100%;
    height: 100%;
    padding: 0px 40px;
  }

  .inputs-container {
    overflow-y: scroll;
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .submit-elements{
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

  .forgot-password{
    display: flex;
    margin: 1rem 0px;
    justify-content: end;
  }
`;
