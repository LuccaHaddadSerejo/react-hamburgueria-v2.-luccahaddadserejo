import styled, { css } from "styled-components";

export interface iStyledInputProps {
  inputVariation?: "form" | "search" | any;
}

export const StyledInput = styled.div<iStyledInputProps>`
  gap: 3px;
  margin-top: 15px;

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
            border: 1px solid var(--color-gray100);
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
            height: 60px;
            background-color: var(--color-gray0);
            border: 1px solid var(--color-gray0);
            border-radius: var(--radius2);
            font-weight: var(--weight2);
            font-size: var(--font-size5);

            &:hover {
              background-color: #828282;
              border-color: #828282;
              color: var(--color-gray100);
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
