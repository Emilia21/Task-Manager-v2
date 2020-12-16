import React, { useEffect, useState, useContext, useRef } from "react";
//import styles from "./AddTask.module.css";
import { Context } from "../../context/context";
import {
  Modal,
  ModalContent,
  Title,
  TextField,
  ButtonGroup,
  Button,
} from "./AddTask.styles";

function AddTask({ showModal, setShowModal }) {
  const [display, setDisplay] = useState(null);
  const [task, setTask] = useState("");
  const { addTask } = useContext(Context);
  const innerRef = useRef();

  useEffect(() => {
    setDisplay(showModal ? "block" : "none");
    innerRef.current && innerRef.current.focus();
  });

  const handleCancel = () => {
    setShowModal(false);
    setTask("");
  };

  const handleAdd = () => {
    if (task.length) {
      addTask(task);
      setShowModal(false);
      setTask("");
    }
  };

  const handleInputChange = (e) => {
    console.log();
    setTask(e.target.value);
  };

  return (
    <Modal display={display}>
      <ModalContent>
        <Title>Add new task</Title>
        <TextField
          ref={innerRef}
          type="text"
          value={task}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <ButtonGroup>
          <Button type="add" onClick={() => handleAdd()}>
            Add
          </Button>
          <Button onClick={() => handleCancel()}>Cancel</Button>
        </ButtonGroup>
      </ModalContent>
    </Modal>
  );
}

export default AddTask;
