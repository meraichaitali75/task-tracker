import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddTaskDialog({ open, handleClose, onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = () => {

        if (!text) return;
        onAdd(text);
        setText("");
        handleClose(); handleClose
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Add New Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Task Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="secondary">Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Add Task
                </Button>
            </DialogActions>
        </Dialog >
    );
}

export default AddTaskDialog;