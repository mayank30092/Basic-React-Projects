import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]); //lists of task

  const addTask = () => {
    if (task == "") return;
    setTodo([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div class="input">
        <input
          type="text"
          value={task}
          placeholder="Enter Your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add" onClick={addTask}>
          Add Task
        </button>

        <ul className="list">
          {todos.map((t, i) => (
            <li key={i}>
              {t} <button onClick={() => deleteTask(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
