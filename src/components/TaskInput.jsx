function TaskInput(props) {
  return (
    <>
      <input type="checkbox" disabled />
      <input
        autoFocus
        type="text"
        value={props.task}
      />
    </>
  );
}

export default TaskInput;
