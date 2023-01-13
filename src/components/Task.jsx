import './Task.css';

function Task(props) {
  return (
    <>
      <li>
        <input type="checkbox" name="" id="" />
        <span>{props.task}</span>
        <button>🖊️</button>
        <button>➖</button>
      </li>
    </>
  );
}

export default Task;