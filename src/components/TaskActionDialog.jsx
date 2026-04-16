import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddTaskDialog({ open, handleClose, mode, task, onConfirm }) {
    const [text, setText] = useState("");

    // When the dialog opens (or task changes), set the initial text
    useEffect(() =>{
        // If opening for EDIT, fill the text. 
        // If ADD, clear it.
        if (open) {
            if (mode === 'edit' && task) {
                setText(task.text);
            } else {
                setText("");
            }
        }
    }, [open, task, mode]);

    const handleSubmit = () => {
        // For Add/Edit, we send the text. For Delete, we send the ID.
        const payload = mode === 'delete' ? task.id : text;
        onConfirm(payload)
        handleClose();
       
    };

    const isDelete = mode ==='delete';
    const isAdd = mode ==='add';

    //Dynamic Title
    const getTitle = () => {
        if(isDelete) return "Confirm Delete";
        if(isAdd) return "Add a New Task";
        return "Edit Task"
    };

    //Dynamic Button Label
    const getButtonLabel = () => {
        if(isDelete) return "Delete";
        if(isAdd) return "Add Task";
        return "Save Changes"
    };

    //Dynamic Button Color
    const getButtoncolor = () => {
        if(isDelete) return "error";
        return "primary"
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>{getTitle()}</DialogTitle>
            <DialogContent>
                {isDelete ? (
                // --- DELETE UI ---
                <DialogContentText>
                    Are you sure you want to permanently delete: <strong>{task?.text}</strong>?
                </DialogContentText>
                ) : (
                <TextField
                    autoFocus
                    margin="dense"
                    label="Task Description"
                    type="text"
                    fullWidth
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    //Allow Pressing "Enter" to submit
                    onKeyDown={(e) => { 
                        if(e.key === 'Enter') handleSubmit();
                    }}
                />
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="secondary">Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color={getButtoncolor()}>
                    {getButtonLabel()}
                </Button>
            </DialogActions>
        </Dialog >
    );
}

export default AddTaskDialog;