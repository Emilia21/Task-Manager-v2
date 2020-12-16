import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 1% 1% 1% 2%;
  display: grid;
  grid-template-columns: 1fr 20fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 1%;
  height: min-content;
`;

export const StyledImage = styled.img`
  width: 1.5vw;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 3vw;
  }
`;

export const TaskDescription = styled.input`
  justify-self: start;
  border: none;
  font-style: italic;
  font-weight: 400;
  color: #707070;
  font-size: 1.3vw;
  background: white;
  width: -webkit-fill-available;
  pointer-events: none;
  &:focus {
    pointer-events: fill;
  }
  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
  transform: scale(1.5);
  @media (max-width: 600px) {
    transform: scale(0.8);
  }
`;
