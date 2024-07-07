import styled, { css } from "styled-components";

export const Wrapper = styled.button`
    width: ${(props) => props.width ? `${props.width}%` : '100%'};
    background-color: ${(props) => props.bgcolor === 'secondary' ? 'var(--seasalt)' : 'var(--primary)'};

    color: ${(props) => props.bgcolor === 'secondary' ? 'var(--primary)' : 'var(--seasalt)'};
    border-radius: 8px;


    ${(props) =>
        props.className.includes('long-button') && css`
            padding: 1rem 7rem ;
        `
    }

`;