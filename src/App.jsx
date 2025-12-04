import { useState } from 'react';
import './App.css';

function App() {
  // "Database" in state:  An array of objects 
  const [tasks, setTasks] = useState([
    { id: 1, text: "Setup Development Environment" },
    { id: 2, text: "Understand State vs Props" },
    { id: 3, text: "Complete Task 1" },
  ]);

  return (
    <div className='app'>
      <h1>Task Tracker Interview</h1>

      <ul>
        {/* 2. Map over the tasks array to render list items */}
        {tasks.map((task) => (
          // 3. KEY PROP: Crucial for React performance and identity
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default App;