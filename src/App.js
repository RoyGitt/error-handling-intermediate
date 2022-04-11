import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
const DEMO = [
  { id: "e1", text: "Do all Exercises" },
  { id: "e2", text: "Finish The course" },
  { id: "e3", text: "Revise the course" },
];
function App() {
  const [list, setList] = useState(DEMO);

  const addItemHandler = (enteredData) => {
    setList((prevValue) => {
      const updatedGoals = [...prevValue];
      updatedGoals.unshift(enteredData);
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    console.log(goalId);
    setList((prevValue) => {
      const updatedGoals = prevValue.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <Form onTextInput={addItemHandler} />
      <List listData={list} onDelete={deleteItemHandler} />
    </div>
  );
}

export default App;
