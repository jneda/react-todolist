import { useState } from 'react';

import './Task.css';

function Task(props) {
  const [editing, setEditingMode] = useState(props.task === '');
  const [task, setTask] = useState(props.task);

  function handleChange(event) {
    setTask(event.target.value);
    console.log(task);
  }

  return (
    <>
      <li>
        {editing
          ? <input
            type="text"
            value={task}
            onChange={handleChange}
            onKeyUp={(event) => (
              event.key === "Enter"
              ? setEditingMode(false)
              : null
            )}
          />
          : <>
              <input type="checkbox" />
              <span>{props.task}</span>
          </>
        }
        <button onClick={() => setEditingMode(!editing)}>🖊️</button>
        <button onClick={() => props.handleDeleteTask(props.id)}>➖</button>
      </li>
    </>
  );
}

export default Task;