import uuid from "uuid/dist/v1";

export default (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("ADD_TASK");
      return [
        ...state,
        {
          description: action.description,
          id: uuid(),
          status: false,
        },
      ];
    case "DELETE_TASK":
      console.log("DELETE_TASK");
      return state.filter((task) => task.id !== action.id);
    case "CHANGE_TASK_STATUS":
      console.log("CHANGE_TASK");
      return state.map((task) =>
        task.id === action.id ? { ...task, status: !task.status } : task
      );
    case "EDIT_TASK":
      console.log("EDIT_TASK");
      return state.map((task) =>
        task.id === action.id
          ? { ...task, description: action.description }
          : task
      );
    default:
      return state;
  }
};
