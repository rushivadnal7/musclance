import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    text-align: center;
    margin: 0.5rem;
    border: 2px solid var(--third-color);
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        height: 10%;
        font-size: larger;
    }

    img{
        width: fit-content;
        height:90%;
        border-radius: 5px;
    }


`