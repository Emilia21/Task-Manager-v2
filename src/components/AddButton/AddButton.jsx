import React, { Fragment } from "react";
import AddIcon from "../../images/add.png";
import { Button } from "./AddButton.styles";

function AddButton({ setShowModal }) {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <Fragment>
      <Button onClick={handleClick} src={AddIcon} />
    </Fragment>
  );
}

export default AddButton;
