import React, { useState } from "react";
import "./style.css";
import { AddTask, Screen } from "./components";
import ContextProvider from "./context/context";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ContextProvider>
      <Screen setShowModal={setShowModal} />
      <AddTask showModal={showModal} setShowModal={setShowModal} />
    </ContextProvider>
  );
}

export default App;
