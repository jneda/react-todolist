import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";

import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), task: 'Eat' },
    { id:uuidv4(), task: 'Drink' },
    { id: uuidv4(), task: 'Sleep' },
    { id:uuidv4(), task: 'Eat' }
  ]);

  function addTask() {
    console.log('Coucou');
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