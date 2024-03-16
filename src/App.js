import React from "react";
import ToDos from "./components/ToDos";
import getTodoItems from "./ds/list";

function App() {

  const todoitems = getTodoItems();

  return (
    <div className="App">
      <ToDos myitems={todoitems} mytitle="MY ToDos"/>
    </div>
  );
}

export default App;
