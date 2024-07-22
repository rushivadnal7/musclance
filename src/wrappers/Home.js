import styled from 'styled-components'

export const Wrapper = styled.section`
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    display: flex;
    flex-direction: column;


`

export const Content = styled.div`
  flex: 1; 
  padding: 0px 20px;
    .icon{
      height: 10%;
      width: 100%;

      img{
        height: 100%;
        width: max-content;
      }
    }
  
    .welcome-text{
      width: 100%;
      height: 10%;
      font-size: 1.7rem;
      font-weight: 600;
    }

    .container{
      height: 80%;
      padding: 20px 0px;
      /* border: 1px solid red; */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .calculator{
      width: 90%;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 10px;
      
      h1{
        font-size: 1.7rem;
        font-weight: bold;
        padding: 10px;
      }
      
      .description{
        padding: 10px;
      }

    }
    .musclebreakdown{
      background-color:   var(--third-color);
    }
    
    .calorie{
      background-color: var(--third-color);
    }

    
`;

