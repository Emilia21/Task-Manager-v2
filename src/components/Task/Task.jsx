import React, { useState, useContext } from "react";
import * as ALL from "../../images";
import { Context } from "../../context/context";

import {
  Container,
  StyledImage,
  TaskDescription,
  Checkbox,
} from "./Task.styles";

function Task({ task, provided }) {
  const { deleteTask, changeTaskStatus, editTask } = useContext(Context);
  const [editableDescription, setEditableDescription] = useState(
    task.description
  );

  const handleEdit = () => {
    editTask(task.id, editableDescription);
    document.getElementById(`task${task.id}`).disabled = true;
  };

  const changeDescription = (e) => {
    setEditableDescription(e.target.value);
  };

  return (
    <Container ref={provided.innerRef} {...provided.draggableProps}>
      <StyledImage
        {...provided.dragHandleProps}
        alt="dragIcon"
        src={ALL.dragIcon.default}
      />
      <TaskDescription
        id={`task${task.id}`}
        type="text"
        value={editableDescription}
        onChange={changeDescription}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleEdit();
          }
        }}
      />
      <Checkbox
        name="done"
        type="checkbox"
        checked={task.status}
        onChange={() => changeTaskStatus(task.id)}
      />
      <StyledImage
        alt="pen"
        src={ALL.pen.default}
        onClick={() => {
          document.getElementById(`task${task.id}`).focus();
        }}
      />
      <StyledImage
        alt="bin"
        src={ALL.bin.default}
        onClick={() => deleteTask(task.id)}
      />
    </Container>
  );
}

export default Task;
