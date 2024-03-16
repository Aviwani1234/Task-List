import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import getTodoItems, { getTitle, getFooter } from "../ds/list";

function ToDos({ myitems, mytitle }) {
    
  //const todoitems = getTodoItems();
  const todoitems = myitems;

  return (
    <>
      <div>{mytitle}</div>
      <ul className="list-group">
        {todoitems.map((item, key) => {
          return (
            <li key={key} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ToDos;
