import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem 0px;
    position: relative;



    .title{
        font-size: 2rem;
        font-weight: 600;
        height: 10%;
        text-align: center;
    }

    .muscle-group-container{
        height: fit-content;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }

    .muscle{
        display: flex;
        align-items: center;
        height: max-content;
        justify-content: center;
        flex-direction: column;
        padding: 5px;
        gap: 20px;

        img{
            height: 80px;
            padding: 5px;
        }
        
        span{
             padding: 5px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
    }



    .bicep{
        /* background-color: rgba(255,255,255,0.3); */
        /* background-color: var(--third-color);
        border: 2px solid white; */
        
    }

    .muscle-clicked{
        background-color: rgba(255,255,255,0.3);
        border-radius: 20px;
    }

    
`