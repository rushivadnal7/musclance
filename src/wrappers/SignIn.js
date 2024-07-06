import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: var(--primary);
    position: relative;

    .header-container{
        width: 100%;
        height: 30%;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: var(--seasalt);
        align-items: start;
        padding: 0px 50px;
        color: var(--primary);
        border-radius: 0px 0px 5px 80px;
    }

    .arrow{
        font-size: 2rem;
        font-weight: 600;
    }
    .container-text :nth-child(1){
        font-size: 2rem;
        font-weight: 600;
        display: block;
    }
`