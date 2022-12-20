import styled from "styled-components";

export const StyledTotal = styled.div`
  border-top: 2px solid var(--color-gray100);
  border-radius: 0 0 5px 5px;
  padding: 20px 15px;
  gap: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray0);

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-gray200);
  }

  span {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-gray200);
  }
`;
