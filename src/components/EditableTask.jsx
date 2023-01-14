import { useState } from 'react';

import Task from './Task';
import TaskInput from './TaskInput';

import './EditableTask.css';

function EditableTask(props) {
  const [editing, setEditingMode] = useState(props.task === '');
  const [task, setTask] = useState(props.task);

  function handleChange(event) {
    setTask(event.target.value);
    console.log(task);
  }

  function enterEditingMode() {
    setEditingMode(editing => !editing);
  }

  return (
    <>
      <li>
        {editing
          ? <TaskInput />
          : <Task task={props.task} />
        }
        <button onClick={enterEditingMode}>🖊️</button>
        <button onClick={() => props.handleDeleteTask(props.id)}>➖</button>
      </li>
    </>
  );
}

export default EditableTask;
