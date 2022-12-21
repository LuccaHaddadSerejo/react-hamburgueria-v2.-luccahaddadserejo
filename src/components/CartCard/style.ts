import styled from "styled-components";

export const StyledCartCard = styled.li`
  width: 100%;
  display: flex;
  padding: 10px;
  gap: 15px;
  min-height: 80px;

  & > :nth-child(1) {
    background-color: var(--color-gray100);
    border: 1px solid var(--color-gray100);
    border-radius: var(--radius3);
    width: 100%;
    max-width: 80px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border: 1px solid var(--color-gray100);
      border-radius: var(--radius3);
    }
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    & > :nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background: none;
        border: none;

        img {
          &:hover {
            filter: invert(52%) sepia(58%) saturate(543%) hue-rotate(93deg)
              brightness(95%) contrast(90%);
          }
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-gray100);
        padding: 5px 0;
        width: 100px;
        height: 40px;

        & > :nth-child(2) {
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 6px;
          height: 100%;
          width: 50px;
        }
      }
    }
  }
`;
