import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  background-color: var(--color-gray0);

  @media (max-width: 1140px) {
    padding: 1rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
    gap: 10px;
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  background-color: var(--color-gray0);
`;
