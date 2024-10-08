import styled from "styled-components";

export const Wrapper = styled.section`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  /* flex-direction: column; */
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .heading-text {
    height: 7%;
    width: 100%;
    font-size: 1.3rem;
  }

  .weekly-data {
    height: 35%;
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
    font-size: 1.1rem;
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
      font-size: 1.1rem;
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
    border-radius: 20px;
    /* height: 80%; */
    grid-area: box3;
    background-color: var(--seasalt);
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    span{
      font-size: 1.1rem;
      font-weight: 500;
    }

    .data{
      font-size: 1.3rem;
      font-weight: 600;
    }
    
  }



  .bottom-container{
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  
  .container-title {
    text-align: center;
    width: max-content;
    height: 10%;
    font-size: 1.4rem;
    display: flex;
    align-items: end;
    font-weight: 500;
  }
  .calculator-container {
    height:80%;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    overflow-x: scroll;
    gap: 20px;
    flex-wrap: nowrap;
  }

  .calculator-container::-webkit-scrollbar {
    display: none;
  }

  .calculator {
    color: var(--seasalt);
    height: 80%;
    width: 80%;
    min-width: 10rem; 
    display: flex;
    align-items: end;
    justify-content: center;
    flex: 0 0 auto; 
    border-radius: 10px;
    position: relative;
    padding: 15px ;


    h1 {
      font-size: 1.3rem;
      text-shadow: 2px 2px var(--primary);
      
    }

    svg{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: var(--seasalt);
      border-radius: 50%;
      padding: 5px;
      background-color: rgba(255,255,255,0.2);
    }

  }

`;
