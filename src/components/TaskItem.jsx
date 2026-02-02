import { useState } from 'react';

function TaskItem({ task, onDelete, onEdit }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleSave = () => {
        onEdit(task.id, newText);
        setIsEditing(false);
    };

    // RENDER EDIT MODE (Input + Save Button)
    if (isEditing) {
        return (
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
                <button onClick={handleSave} style={{ marginLeft: "10px" }}>Save</button>
                <button onClick={() => setIsEditing(false)} style={{ marginLeft: "5px" }}>Cancel</button>
            </div>
        );
    }

    // 2. RENDER VIEW MODE (Text + Edit/Delete)
    return (
        <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', width: '300px' }}>
            <span>{task.text}</span>
            <div>
                <button style={{ marginLeft: "10px", background: "green", color: "white" }} onClick={() => setIsEditing(true)}>Edit</button>

                <button
                    onClick={() => onDelete(task.id)}
                    style={{ marginLeft: "10px", background: "red", color: "white" }}
                >
                    Delete
                </button>
            </div>
        </li>
    );

}

export default TaskItem