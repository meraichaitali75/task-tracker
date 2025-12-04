import { useState } from "react";

function TaskForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page reference

        if (!text) return;

        //send the text up to App.jsx
        onAdd(text);
        setText("");
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }} >
            <h1>Form</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit">Add Task</button>
        </form>
    );

}

export default TaskForm;
