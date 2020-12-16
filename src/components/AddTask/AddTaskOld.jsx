import React, { useEffect, useState, useContext, useRef } from "react";
import styles from "./AddTask.module.css";
import { Context } from "../../context/context";

function AddTask({ showModal, setShowModal }) {
  const [display, setDisplay] = useState(null);
  const [task, setTask] = useState("");
  const { addTask } = useContext(Context);
  const innerRef = useRef();

  useEffect(() => {
    setDisplay(showModal ? "display-block" : "display-none");
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
    <div id="myModal" className={`${styles.modal} ${styles[display]}`}>
      <div className={styles["modal-content"]}>
        <h1 className={styles.title}>Add new task</h1>

        <input
          ref={innerRef}
          type="text"
          className={styles["text-field"]}
          value={task}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <div className={styles["btn-group"]}>
          <button
            className={`${styles.button} ${styles["add-btn"]}`}
            onClick={() => handleAdd()}
          >
            Add
          </button>
          <button className={styles.button} onClick={() => handleCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
