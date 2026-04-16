import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';

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
            <TableRow >
                <TableCell component="th" scope="row">
                    <TextField
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        fullWidth
                    />
                </TableCell>
                <TableCell align="right">
                    <Button onClick={handleSave} color="primary">Save</Button>
                    <Button onClick={() => setIsEditing(false)} color="secondary">Cancel</Button>
                </TableCell>
            </TableRow>
        );
    }

    // 2. RENDER VIEW MODE (Text + Edit/Delete)
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
            <TableCell component="th" scope="row">{task.text}</TableCell>
            <TableCell align="right">
                <Button 
                variant="outlined"
                size="small"
                style={{ marginRight: "10px" }}
                onClick={() => setIsEditing(true)}
                >Edit</Button>
                <Button
                    onClick={() => onDelete(task.id)}
                    variant="contained"
                    color="error"
                    size="small"
                >
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );

}

export default TaskItem