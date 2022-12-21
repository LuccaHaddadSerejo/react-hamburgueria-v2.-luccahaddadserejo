import styled, { css } from "styled-components";

export interface iStyledInputProps {
  inputVariation?: string;
}

export const StyledInput = styled.div<iStyledInputProps>`
  gap: 3px;
  margin-top: 15px;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: fit-content;
    background-color: white;
    position: absolute;
    top: -9px;
    left: 18px;
  }

  input {
    border-radius: var(--radius3);
    ${({ inputVariation }) => {
      switch (inputVariation) {
        case "form":
          return css`
            text-indent: 20px;
            width: 100%;
            height: 60px;
            background-color: white;
            border: 2px solid var(--color-gray100);
            border-radius: var(--radius2);
            font-weight: var(--weight4);
            font-size: var(--font-size5);

            &:focus {
              border-color: var(--color-gray600);
            }

            &::placeholder {
              color: #999999;
            }
          `;
        case "search":
          return css`
            width: 100%;
            height: 50px;
            padding: 0 10px 0 15px;
            flex-grow: 2;
            border: none;
            border-radius: 8px;
            background-color: white;
            position: relative;
            bottom: 5px;

            &::placeholder {
              font-weight: 400;
              font-size: 16px;
              color: var(--color-gray100);
            }

            &:focus {
              border: 2px solid var(--color-gray600);
            }
          `;
        case "searchMobile":
          return css`
            width: 100%;
            max-width: 1140px;
            height: 50px;
            padding: 0 10px 0 15px;
            flex-grow: 2;
            border: none;
            border-radius: 8px;
            background-color: white;
            position: relative;
            bottom: 5px;

            &::placeholder {
              font-weight: 400;
              font-size: 16px;
              color: var(--color-gray100);
            }

            &:focus {
              border: 2px solid var(--color-gray600);
            }
          `;
      }
    }}
  }

  label {
    font-weight: var(--weight4);
    font-size: var(--font-size7);
    color: #999999;
  }
`;
