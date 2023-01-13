import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";

import './TodoList.css';

// dummy data
const dummyTasks = [
  { id: uuidv4(), task: 'Eat' },
  { id:uuidv4(), task: 'Drink' },
  { id: uuidv4(), task: 'Sleep' },
  { id:uuidv4(), task: 'Eat' }
];

function TodoList() {
  const [tasks, setTasks] = useState(dummyTasks);

  function makeTask(task="") {
    return {
      id: uuidv4(),
      task: task
    };
  }

  function addTask() {
    setTasks(tasks.concat(makeTask()));
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <fieldset>
      <legend>Todo:</legend>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            task={task.task}
            handleDeleteTask={deleteTask}
          />
        ))}
      </ul>
      <button onClick={addTask}>➕</button>
    </fieldset>
  );
}

export default TodoList;