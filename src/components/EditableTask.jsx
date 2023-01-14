import Task from './Task';
import TaskInput from './TaskInput';

import './EditableTask.css';

function EditableTask(props) {
  return (
    <>
      <li>
        {props.editing
          ? <TaskInput
              task={props.task}
              handleInputChange={props.handleInputChange}
              handleInputKeyUp={props.handleInputKeyUp}
            />
          : <Task task={props.task} />
        }
        <button
          disabled={props.editing}
          onClick={() => props.handleEditTask(props.id)}
        >
          🖊️
        </button>
        <button
          disabled={props.editing}
          onClick={() => props.handleDeleteTask(props.id)}
        >
          ➖
        </button>
      </li>
    </>
  );
}

export default EditableTask;
