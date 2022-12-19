import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRegisterFull = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    min-height: 100vh;
  }

  main {
    max-width: 1500px;
    padding: 15px;
    border: 1px solid transparent;

    section {
      width: 100%;
      max-width: 1500px;

      button {
        margin-top: 15px;
      }
    }

    @media (min-width: 800px) {
      display: flex;
      flex-direction: row;
      position: relative;
      bottom: 50px;
      gap: 40px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-weight: var(--weight3);
  font-size: var(--font-size6);
  text-decoration: underline;
  color: #828282;
  &:hover {
    background-color: #828282;
    border-color: #828282;
    color: var(--color-gray100);
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-weight: var(--weight1);
    font-size: var(--font-size4);
    color: #333333;
  }
`;
