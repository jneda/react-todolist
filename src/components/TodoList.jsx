import { useState } from "react";
import Task from "./Task";

import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([
    'Eat',
    'Drink',
    'Sleep'
  ]);

  return (
    <fieldset>
      <legend>Todo:</legend>
      <ul>
        {tasks.map((task, i) => <Task key={i} task={task} />)}
      </ul>
      <button>➕</button>
    </fieldset>
  );
}

export default TodoList;