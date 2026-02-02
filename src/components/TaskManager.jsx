import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


function TaskManager() {

    //LAZY INITIALIZATION: check localstorage 
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("my-tasks");
        if (saved) {
            return JSON.parse(saved);
        } else {
            return [];
        }
    });
    // 2. THE SIDE EFFECT: Whenever 'tasks' changes, save it!
    useEffect(() => {
        localStorage.setItem("my-tasks", JSON.stringify(tasks));
    }, [tasks]);


    // === update task ===
    const editTask = (id, newText) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, text: newText } : task
        ));
    };

    // === add task ===
    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text
        };
        setTasks([...tasks, newTask]);
    };

    // === delete task ===
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // === 3. RENDER ===
    return (
        <div className="task-manager">
            <h2>My Daily Tasks</h2>

            <TaskForm onAdd={addTask} />
           
            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onEdit={editTask} />

        </div>
    );
}

export default TaskManager;