function TaskList({ tasks, onDelete }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }} >
                    <span>{task.text}</span>

                    <button onClick={() => onDelete(task.id)}
                        style={{ marginLeft: "10px", background: "red", color: "white" }}
                    >
                        Delete
                    </button>
                </li>
            ))
            }
        </ul>
    );
}

export default TaskList;