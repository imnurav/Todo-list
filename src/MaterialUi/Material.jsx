import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
// import DeleteIcon from "@material-ui/icons/Delete";
import Listitem from "./Listitem";
// import "bootstrap/dist/css/bootstrap.min.css";
const Material = () => {
  const [item, setitem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const ChnageEvent = (event) => {
    setitem(event.target.value);
  };
  const RunClick = () => {
    setNewItem((olddata) => {
      return [...olddata, item];
    });
    setitem(" ");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDoLisT</h1>
          <input
            type="text"
            placeholder="Add an Item"
            onChange={ChnageEvent}
            value={item}
            // required="true"
          />
          <Button className="btn_green" onClick={RunClick}>
            <AddIcon />
          </Button>

          <ol>
            {newItem.map((val, index) => {
              return <Listitem key={index} id={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Material;
