import styled from "styled-components";
import { CardFadeIn } from "../../styles/animations";
export const StyledCard = styled.li`
  min-width: 300px;
  min-height: 358px;
  display: flex;
  flex-direction: column;
  border: 3px solid var(--color-gray100);
  border-radius: 5px;
  animation: ${CardFadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media (min-width: 800px) {
    min-width: 358px;
  }

  &:hover {
    border-color: var(--color-primary);
  }

  img {
    height: 150px;
    object-fit: contain;
    width: 100%;
    border-radius: 4px 4px 0 0;
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
