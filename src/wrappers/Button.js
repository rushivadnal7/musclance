import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  width: ${(props) => (props.width ? `${props.width}%` : "")};
  background-color: ${(props) =>
        props.bgcolor === "secondary" ? "var(--seasalt)" : props.bgcolor === "third-color" ? "var(--third-color)" : "var(--primary)"};

  color: ${(props) =>
        props.color === "secondary" ? "var(--seasalt)" : props.color === "third-color" ? "var(--third-color)" : "var(--primary)"};
  border-radius: 8px;
  display: flex;
  justify-content: space-around;

  ${(props) =>
        props.className.includes("long-button") &&
        css`
      padding: 1rem 7rem;
    `}
  ${(props) =>
        props.className.includes("small-button") &&
        css`
      padding: 0.5rem 2rem;
    `}
`;
