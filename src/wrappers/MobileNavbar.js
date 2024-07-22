import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 4.5rem;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  /* background-color: var(--seasalt); */
  background-color: rgba(255,255,255,0.5);
  border-radius: 20px;
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
