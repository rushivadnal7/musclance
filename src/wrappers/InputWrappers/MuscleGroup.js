import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 80%;

    .title{
        font-size: 2rem;
        font-weight: 600;
        height: 10%;
    }

    .muscle-group-container{
        height: 90%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .muscle{
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid red;x */
        flex-direction: column;
        gap: 20px;

        img{
            height: 80px;
        }

        span{
            text-transform: uppercase;
            letter-spacing: 2px;
        }
    }

    
`