import React, { useContext } from "react";
import { Context } from "../../context/context";
import { AddButton, BouncingFox, TasksList } from "../";
import { Container, Title, Result } from "./Screen.styles";

function Screen({ setShowModal }) {
  const { tasks, reorderTasks } = useContext(Context);
  let haveTasks = tasks.length > 0 ? true : false;

  const header = haveTasks ? "Tasks to do:" : "No more tasks to do.";

  const result = haveTasks ? (
    <TasksList tasks={tasks} reorderTasks={reorderTasks} />
  ) : (
    <BouncingFox />
  );
  return (
    <Container>
      <Title>{header}</Title>
      <Result>{result}</Result>
      <AddButton setShowModal={setShowModal} />
    </Container>
  );
}

export default Screen;
