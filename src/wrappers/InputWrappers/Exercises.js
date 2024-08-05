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
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    gap: 20px;
    z-index: 2;
    /* flex-direction: column; */

    .sets , .reps {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      span{
        font-size: 1.4rem;
        color: var(--primary);
        letter-spacing: 2px;
      }
    }

    .bezel {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      gap: 15px;
      font-size: 1.3rem;
      color: var(--primary);

      .previous-value, .next-value {
        cursor: pointer;
      }

      .main-value {
        font-size: 2.5rem;
        font-weight: 600;
      }
    }
  }
`;