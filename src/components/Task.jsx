import './Task.css';

function Task(props) {
  return (
    <>
      <li>
        <input type="checkbox" name="" id="" />
        <span>{props.task}</span>
        <button>🖊️</button>
        <button onClick={() => props.handleDeleteTask(props.id)}>➖</button>
      </li>
    </>
  );
}

export default Task;