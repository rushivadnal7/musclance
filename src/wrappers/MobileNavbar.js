import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: var(--seasalt);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .home, .history, .profile {
    color: var(--primary);
    display: flex;
    align-items: center;
  }

  .active {
    color: var(--seasalt);
    border-radius: 30px;
    padding: 0.4rem;
    width: max-content;
    background-color: var(--third-color);
  }

  .icon {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .text {
    display: none;
  }

  .active .text {
    display: block;
  }
`;
