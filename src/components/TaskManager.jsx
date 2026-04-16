import { useState, useEffect } from 'react';
// import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskActionDialog from './TaskActionDialog'
import Button from '@mui/material/Button';

function TaskManager() {

    //LAZY INITIALIZATION for data
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("my-tasks");
        if (saved) {
            return JSON.parse(saved);
        } else {
            return [];
        }
    });

    // useEffect localstorage
    useEffect(() => {
        localStorage.setItem("my-tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Unified State for Add, Edit, AND Delete for modal visibility
    const [dialogConfig, setDialogConfig] = useState({
        open: false,
        mode: null,
        task: null
    })


    // --- THE ONE HANDLER TO RULE THEM ALL ---
    const handleDialogConfirm = (payload) => {
        const { mode, task } = dialogConfig;

        if(mode === 'add' )
        {
            // Payload is the new text
            const newTask = {
                id: Date.now(),
                text: payload
            };
            setTasks([...tasks, newTask]);
        }
        else if(mode === 'edit' )
        {
            // Payload is the ID (or we can use task.id)
            setTasks(tasks.filter((t) =>
                t.id === task.id ? {...t, text: payload }: t
            ));
        }
        else if(mode === 'delete' )
        {
            // Payload is the updated text
            setTasks(tasks.filter((t) => t.id !== task.id));
        }
    }

   const closeDialog = () => {
        setDialogConfig({ ...dialogConfig, open: false });
    };

    // --- OPENERS ---
    const openAdd = () => {
        setDialogConfig({ open: true, mode: 'add', task: null });
    };

    const openEdit = (task) => {
        setDialogConfig({ open: true, mode: 'edit', task: task });
    };

    const openDelete = (task) => {
        setDialogConfig({ open: true, mode: 'delete', task: task });
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>My Daily Tasks</h2>

            <Button 
                variant="contained" 
                onClick={openAdd} // Opens the unified dialog in 'add' mode
                style={{ marginBottom: "20px" }}
            >
                + Add New Task
            </Button>

            <TaskList
                tasks={tasks}
                onDelete={openDelete}
                onEdit={openEdit}
            />

            {/* THE ONLY DIALOG COMPONENT IN THE APP */}
            <TaskActionDialog 
                open={dialogConfig.open}
                handleClose={closeDialog}
                mode={dialogConfig.mode}
                task={dialogConfig.task}
                onConfirm={handleDialogConfirm}
            />
        </div>
    );
}

export default TaskManager;