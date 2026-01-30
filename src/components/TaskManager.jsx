import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TaskManager() {

    //LAZY INITIALIZATION: check localstorage 
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("my-tasks");
        if(saved){
            return JSON.parse(saved);
        }else{
            return[];
        }
    });
    // 2. THE SIDE EFFECT: Whenever 'tasks' changes, save it!
    useEffect(() =>{
        localStorage.setItem("my-tasks", JSON.stringify(tasks));
    }, [tasks]);

    // === 1. STATE lives here now ===
    // const [tasks, setTasks] = useState([
    //     { id: 1, text: "Setup Development Environment" },
    //     { id: 2, text: "Understand State vs Props" },
    //     { id: 3, text: "Complete Task 1" },
    // ]);

    // === 2. LOGIC ===
    const addTask = (text) => {
        const newTask = { 
            id: Date.now(), 
            text: text };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // === 3. RENDER ===
    return (
        <div className="task-manager">
            <h2>My Daily Tasks</h2>

            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default TaskManager;