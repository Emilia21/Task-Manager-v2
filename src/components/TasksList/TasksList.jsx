import React, { useState, useContext } from "react";
import { Task } from "../";
import { TaskList } from "./TaskList.styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TasksList = ({ tasks, reorderTasks }) => {
  return (
    <DragDropContext
      onDragEnd={(param) => {
        console.log("dragged");
        const srcI = param.source.index;
        const desI = param.destination?.index;
        if (desI) {
          tasks.splice(desI, 0, tasks.splice(srcI, 1)[0]);
          console.log(tasks);
          reorderTasks(tasks);
        }
      }}
    >
      <Droppable droppableId="droppable-1">
        {(provided, _) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, i) => {
              return (
                <Draggable
                  key={task.id}
                  draggableId={`dragable-${task.id}`}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <Task provided={provided} key={task.id} task={task} />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default TasksList;
