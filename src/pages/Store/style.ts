import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
`;

export const StyledFilterDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 40px;
  gap: 30px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: 950px) {
      margin-bottom: 20px;
    }

    @media (min-width: 800px) {
      margin-bottom: 0px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 26px;
    color: var(--color-gray300);

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  p {
    font-weight: 700;
    font-size: 26px;
    color: var(--color-gray300);

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  @media (min-width: 1431px) {
    max-width: 641px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (min-width: 800px) {
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  @media (min-width: 450px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

export const StyledMainList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 30px;
  padding: 0 15px;
  gap: 30px;

  @media (min-width: 800px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 1260px) {
    flex-wrap: wrap;
  }
`;
