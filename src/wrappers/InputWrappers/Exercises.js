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
    flex-direction: column;

    .sets {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .bezel {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      color: var(--primary);

      .previous-value, .next-value {
        cursor: pointer;
      }

      .main-value {
        font-size: 1.5rem;
      }
    }
  }
`;