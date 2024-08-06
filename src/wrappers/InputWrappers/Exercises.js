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

    .sets-reps-display{
      /* display: flex; */
      flex-direction: column;
      position: absolute;
      bottom: 10px;
      right: 10px;
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    .close-slider {
      position: absolute;
      top: 5%;
      right: 20px;
      color: var(--primary);
    }

    .weight-div{
      height: 50%;
      width: 100%;
      grid-area: weight;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      span{
        font-size: 1.4rem;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--primary);
        letter-spacing: 2px;
      }
      
      input{
        background-color: transparent;
        border: 1px solid var(--primary);
        font-weight: 500;
        color: var(--primary);
        width: 3rem;
        outline: none;
        padding: 5px;
        border-radius: 6px;
      }
    } 

    .container{
      display: flex;
      align-items: center;
    }
    .sets,
    .reps {
      height: 50%;
      width: 50%;
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
        color: var(--primary);
        font-weight: 500;
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
