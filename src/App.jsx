import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // "Database" in state:  An array of objects 
  const [tasks, setTasks] = useState([
    { id: 1, text: "Setup Development Environment" },
    { id: 2, text: "Understand State vs Props" },
    { id: 3, text: "Complete Task 1" },
  ]);

  //logic 1: Add Task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text
    };
    setTasks([...tasks, newTask]);
  }

  //logic 2: Delete Task (Filter out the item with the matching ID)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='app'>
      <h1>Task Tracker Interview</h1>

      {/* Pass the function down as a prop */}
      <TaskForm onAdd={addTask} />

      {/* Pass the data and delete function down */}
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  )
};

export default App;