import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 80px;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  background-color: var(--color-gray0);

  @media (max-width: 1140px) {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  background-color: var(--color-gray0);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;

  & > :nth-child(1) {
    position: relative;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0;
      bottom: 15px;
      right: 10px;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-radius: var(--radius3);
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div {
      position: absolute;
      top: 7px;
      left: 18px;
      background-color: var(--color-primary);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 70%;

      span {
        color: white;
        font-weight: var(--weight1);
        font-size: var(--font-size7);
      }
    }
  }

  button {
    background: none;
    border: none;
  }
`;
