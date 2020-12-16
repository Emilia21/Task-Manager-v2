import React, { useState, createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

export const Context = createContext();

const ContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  const addTask = (description) => {
    dispatch({ type: "ADD_TASK", description });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", id });
  };

  const changeTaskStatus = (id) => {
    dispatch({ type: "CHANGE_TASK_STATUS", id });
  };

  const editTask = (id, description) => {
    dispatch({ type: "EDIT_TASK", id, description });
  };

  const reorderTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <Context.Provider
      value={{
        tasks: state,
        addTask,
        deleteTask,
        changeTaskStatus,
        editTask,
        reorderTasks,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
