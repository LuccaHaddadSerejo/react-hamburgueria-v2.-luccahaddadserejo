import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 360px;
  max-width: 400px;
  min-height: 346px;
  max-height: 346px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-gray100);
  border-radius: 5px;

  &:hover {
    border-color: var(--color-primary);
  }

  img {
    height: 150px;
    object-fit: contain;
    width: 100%;
    background-color: var(--color-gray0);
  }

  div {
    gap: 15px;
    display: flex;
    flex-direction: column;
    padding: 20px 18px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-gray600);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-gray200);
  }

  span {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primary);
  }
`;
