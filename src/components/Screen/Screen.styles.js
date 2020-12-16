import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3vw;
  margin: 0;
  color: #707070;
  text-align: center;

  @media (pointer: none), (pointer: coarse) {
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  height: inherit;
  justify-items: center;
  align-items: center;
  grid-row-gap: 10%;
  @media (max-width: 700px) {
    grid-row-gap: 0%;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

export const Result = styled.div`
  text-align: center;
  align-self: start;
`;
