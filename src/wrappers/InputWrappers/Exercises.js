import styled from "styled-components";


export const Wrapper = styled.div`
 width: 100%;
  height: 250px;
  text-align: center;
  margin: 0.5rem;
  border: 2px solid var(--third-color);
  padding: 10px;
  border-radius: 8px;
  position: relative;

  .exercise-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    h1 {
      height: 15%;
      font-size: larger;
    }

    img {
      width: fit-content;
      height: 85%;
      border-radius: 5px;
    }
  }

  .exercise-details {
    background-color: var(--third-color);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    gap: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;

    .bezel {
      position: relative;
      width: 100px;
      height: 100px;
      border: 5px solid var(--primary);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-bottom: 10px;
    }

    .marker {
      width: 10px;
      height: 10px;
      background-color: var(--seasalt);
      border-radius: 50%;
      position: absolute;
      top: -5px;
    }

    input {
      background-color: var(--seasalt);
      width: 5rem;
      color: var(--primary);
      height: 3.5rem;
      padding: 8px;
      border-radius: 5px;
      margin-top: 10px;
    }
  }
`;