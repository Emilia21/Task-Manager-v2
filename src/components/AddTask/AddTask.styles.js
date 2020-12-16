import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => props.display}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  color: #707070;
`;

export const ModalContent = styled.div`
  background-color: #98d8a9;
  margin: auto;
  padding: 1% 2%;
  border: 2px solid #707070;
  width: 50%;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0% 2% 2%;
  font-size: 2vw;
`;

export const TextField = styled.input`
  display: block;
  width: 42vw;
  font-size: 1em;
  font-style: italic;
  padding: 1% 3%;
  border: 1px solid #707070;
  border-radius: 20px;
  margin: 2% 0;
  margin-left: auto;
  margin-right: auto;
  color: #707070;
`;

export const Button = styled.button`
  border: 1px solid #707070;
  border-radius: 20px;
  color: #707070;
  width: 7vw;
  height: 4vh;
  cursor: pointer;
  justify-self: ${(props) => (props.type === "add" ? "end" : "")};
  @media (max-width: 700px) {
    width: 13vw;
    height: min-content;
    font-size: 2vw;
  }
`;

export const ButtonGroup = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2%;
  justify-items: start;
`;

//   .add-btn {
//     justify-self: end;
//   }
