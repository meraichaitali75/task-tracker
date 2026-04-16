import React, { useState, useEffect } from 'react';

const CrudApp = () => {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
            <h2>My Tasks</h2>
            <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='What needs to be done?' />

                <button type='submit'>Add Task</button>
            </form>

            <ul className="user-list">
                {tasks.map(task => (
                    <li key={task.id} className="user-item">
                        <span onClick={() => toggleComplete(task.id)}
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                                flex: 1
                            }}
                        >{task.text}</span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))};

            </ul>

            {tasks.length === 0 && <p>No Tasks yet!</p>}
        </div>

    );
};

export default CrudApp;

