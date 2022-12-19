import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 30px;
  padding: 0 15px;
`;

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
`;

export const StyledCartHeader = styled.div`
  border-radius: 5px 5px 0px 0px;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: white;
  }

  button {
    border: none;
    background: none;
    background-color: none;
    color: white;
    font-size: var(--font-size4);
    font-weight: var(--weight3);
    transition: 0.4s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const StyledEmptyCart = styled.div`
  border-radius: 0px 0px 5px 5px;
  border: 1px solid var(--color-gray0);
  background-color: var(--color-gray0);
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-gray600);
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-gray300);
  }
`;

export const StyledFullCart = styled.ul`
  border-radius: 0px 0px 5px 5px;
  max-height: 350px;
  border: 1px solid var(--color-gray0);
  background-color: var(--color-gray0);
  overflow-y: auto;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
