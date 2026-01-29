import { useState } from 'react';

function TaskForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page refresh
        if (!text) return; // Prevent empty tasks

        onAdd(text); // Call the function passed from App.jsx
        setText(''); // Clear input
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;