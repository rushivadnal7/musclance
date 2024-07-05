import styled, { css } from "styled-components";

export const Wrapper = styled.button`
    width: 100%;
    background-color: var(--primary);
    color: var(--seasalt);
    border-radius: 8px;


    ${(props) =>
        props.className.includes('long-button') && css`
            padding: 1rem 7rem ;
            width: 100%;
        `
    }

`;