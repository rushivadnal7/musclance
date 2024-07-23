import styled from "styled-components";

export const Wrapper = styled.section`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  /* flex-direction: column; */
`;

export const Content = styled.div`
  flex: 1;
  padding: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .heading-text {
    height: 10%;
    width: 100%;
    font-size: 1.3rem;
    /* border: 1px solid red; */
  }

  .weekly-data {
    height: 30%;
    color: var(--primary);
    width: 100%;
    display: grid;
    grid-template-areas:
      "box1 box2"
      "box3 box3";
      gap: 15px;
  }
  .exercise-count {
    grid-area: box1;
    border-radius: 30px;
    background-color: var(--third-color);
    

    .header{
      display: flex;
      height: 50%;
      padding: 10px;
    font-size: 1.2rem;
      font-weight: 600;
      justify-content: space-around;
      width: 100%;
    }

    .data{
      height: 50%;
      font-size: 2rem;
      font-weight: 600;
      text-align: start;
      display: flex;
      padding-left: 20px;
      align-items: center;
    }
  }
  
  .calories-burned {
    grid-area: box2;
    border-radius: 30px;
    background-color: var(--third-color);
    
    
    .header{
      display: flex;
      font-size: 1.2rem;
      height: 50%;
      padding: 10px;
      font-weight: 600;
      justify-content: space-around;
      width: 100%;
    }

    .data{
      height: 50%;
      font-size: 2rem;
      font-weight: 600;
      text-align: start;
      display: flex;
      padding-left: 20px;
      align-items: center;
    }
  }
  
  .musclebreakdown-count {
    border-radius: 30px;
    height: 80%;
    grid-area: box3;
    background-color: var(--seasalt);
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    span{
      font-size: 1.2rem;
      font-weight: 500;
    }

    .data{
      font-size: 1.5rem;
      font-weight: 600;
    }
    
  }

  .container-title {
    width: 100%;
    height: 10%;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .calculator-container {
    height: 50%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 20px;
    flex-wrap: nowrap;
  }

  .calculator-container::-webkit-scrollbar {
    display: none;
  }

  .calculator {
    color: var(--seasalt);
    height: 60%;
    width: 70%;
    min-width: 10rem; 
    flex: 0 0 auto; 
    border-radius: 10px;


    h1 {
      font-size: 1.7rem;
      font-weight: bold;
      
    }

  }


  .calorie {
    color: var(--seasalt);
  }
`;
