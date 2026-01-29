import TaskManager from './components/TaskManager';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className='app'>
      <h1>Task Tracker Interview</h1>

      <TaskManager />
      {/* <Login /> */}
      {/* <TodoApp /> */}

    </div>
  );
};

export default App;