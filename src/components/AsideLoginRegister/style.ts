import styled from "styled-components";

export const StyledAsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  padding: 15px 0;
  gap: 30px;
  width: 100%;

  img {
    max-width: min-content;
  }

  & > div {
    width: 100%;
    max-width: 380px;
    padding: 13px;
    display: flex;
    align-items: center;
    gap: 19px;
    border: 1px solid var(--color-gray100);
    border-radius: var(--radius3);

    & > div {
      border: 1px solid transparent;
      border-radius: var(--radius3);
      background-color: rgba(39, 174, 96, 0.1);
      height: 60px;
      width: 149px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      font-weight: var(--weight4);
      font-size: var(--font-size7);
      color: var(--color-gray300);
    }
  }
`;
