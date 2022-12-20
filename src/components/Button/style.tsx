import styled, { css } from "styled-components";

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius3);
  transition: 0.4s;

  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "login":
        return css`
          width: 100%;
          height: 60px;
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius2);
          font-weight: var(--weight2);
          font-size: var(--font-size5);
          color: white;

          &:hover {
            background-color: #93d7af;
            border-color: #93d7af;
          }
        `;
      case "register":
        return css`
          width: 100%;
          height: 60px;
          background-color: var(--color-gray0);
          border: 1px solid var(--color-gray0);
          border-radius: var(--radius2);
          font-weight: var(--weight2);
          font-size: var(--font-size5);
          color: #999999;

          &:hover {
            background-color: #828282;
            border-color: #828282;
            color: var(--color-gray100);
          }
        `;
      case "search":
        return css`
          width: 53px;
          height: 40px;
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius2);
          font-weight: 900;
          font-size: var(--font-size6);
          &:hover {
            filter: brightness(1.2);
          }
        `;
      case "add":
        return css`
          width: 100%;
          max-width: 160px;
          height: 40px;
          background-color: #bdbdbd;
          border: 1px solid #bdbdbd;
          border-radius: var(--radius2);
          font-weight: var(--weight2);
          font-size: var(--font-size5);
          color: white;

          &:hover {
            background-color: var(--color-primary);
            border-color: var(--color-primary);
          }
        `;
      case "clearCart":
        return css`
          width: 100%;
          height: 60px;
          background-color: var(--color-gray300);
          border: 1px solid var(--color-gray300);
          border-radius: var(--radius2);
          font-weight: var(--weight2);
          font-size: var(--font-size5);
          color: var(--color-gray100);

          &:hover {
            filter: brightness(1.2);
            color: var(--color-gray0);
          }
        `;
      case "addAndSubtractCart":
        return css`
          height: 100%;
          background: none;
          color: var(--color-primary);
          font-size: var(--font-size3);
          font-weight: var(--weight3);
          border: none;
          &:hover {
            filter: brightness(1.2);
          }
        `;
    }
  }}
`;
