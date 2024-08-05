import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  text-align: center;
  margin: 0.5rem;
  background-color: rgba(255,255,255,0.1);
  /* border: 2px solid var(--third-color); */
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

  .open-drawer {
    display: flex;
    animation: ${(props) => (props.animationEnabled ? 'drawerOpenner 1s ease-in forwards' : 'none')};
  }
  .close-drawer {
    display: none;
  }

  .exercise-details {
    background-color: rgba(255,255,255,0.3);
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
    flex-direction: column;

    .close-slider {
      position: absolute;
      top: 5%;
      right: 20px;
      color: var(--primary);
    }

    .sets,
    .reps {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      span {
        font-size: 1.4rem;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--primary);
        letter-spacing: 2px;
      }
    }

    .bezel {
      display: flex;
      align-items: center;
      gap: 15px;
      
      .previous-value,
      .next-value {
        color: var(--gray);
        font-size: 1.3rem;
        cursor: pointer;
        
      }

      .main-value {
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--third-color);
      }
    }
  }

  @keyframes drawerOpenner {
    0% {
      right: -150%;
    }
    100% {
      right: 0;
    }
  }

`;
