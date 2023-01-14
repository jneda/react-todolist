import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EditableTask from "./EditableTask";

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
  const [editing, setEditingMode] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  function makeTask(task="") {
    return {
      id: uuidv4(),
      task: task
    };
  }

  function addTask() {
    const newTask = makeTask();
    setTasks(tasks.concat(newTask));
    setEditingMode(newTask.id);
  }

  function deleteTask(taskId) {
    if (editing) {
      return;
    }
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  function editTask(taskId) {
    if (editing) {
      return;
    }
    setEditingMode(taskId);
    // get task text
    const taskIndex = tasks.findIndex(task => taskId === task.id);
    setEditedTask(tasks[taskIndex].task);
  }

  function handleInputChange(event) {
    const taskInput = event.target;
    setEditedTask(taskInput.value);    
  }

  function handleInputKeyUp(event) {
    if (event.key !== "Enter") {
      return;
    }
    // modify task
    const taskIndex = tasks.findIndex(task => editing === task.id);
    tasks[taskIndex].task = editedTask;
    // reset editing mode and editedTask
    setEditingMode(null);
    setEditedTask('');
  }

  return (
    <fieldset>
      <legend>Todo:</legend>
      <ul>
        {tasks.map((task) => (
          <EditableTask
            key={task.id}
            id={task.id}
            handleDeleteTask={deleteTask}
            handleEditTask={editTask}
            handleInputChange={handleInputChange}
            handleInputKeyUp={handleInputKeyUp}
            editing={editing === task.id}
            task={editing === task.id && editedTask ? editedTask : task.task}
          />
        ))}
      </ul>
      <button onClick={addTask}>➕</button>
    </fieldset>
  );
}

export default TodoList;