import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const ListItem = (props) => {
  const [line, setline] = useState(false);
  const cutIt = () => {
    setline(true);
  };
  // const deleteitems = () => {};
  return (
    <>
      <div className="todo_style">
        <span onClick={cutIt}>
          <DeleteIcon className="btn_red" />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};
export default ListItem;
