import TodoList from "./components/TodoList";

import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>My Todo List</h1>
      </header>
      <TodoList />
      <footer>
        @houlala.dev
      </footer>
    </div>
  );
}

export default App;
