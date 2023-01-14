function TaskInput(props) {
  return (
    <>
      <input type="checkbox" disabled />
      <input
        autoFocus
        type="text"
        value={props.task}
        onChange={event => props.handleInputChange(event)}
        onKeyUp={event => props.handleInputKeyUp(event)}
        // prevent from losing focus before enter is pressed
        // NB: does not work in Firefox
        onBlur={event => {
          event.target.focus();
        }}
      />
    </>
  );
}

export default TaskInput;
