import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TaskManager() {
    // === 1. STATE lives here now ===
    const [tasks, setTasks] = useState([
        { id: 1, text: "Setup Development Environment" },
        { id: 2, text: "Understand State vs Props" },
        { id: 3, text: "Complete Task 1" },
    ]);

    // === 2. LOGIC ===
    const addTask = (text) => {
        const newTask = { id: Date.now(), text: text };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // === 3. RENDER ===
    return (
        <div className="task-manager">
            <h2>My Daily Tasks</h2>

            {/* Sibling communication is handled here */}
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default TaskManager;