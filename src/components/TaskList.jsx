import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }} >
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                </li>
            ))
            }
        </ul >
    );
}

export default TaskList;