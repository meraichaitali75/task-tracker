import TaskItem from './TaskItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell style={{ fontWeight: "bold" }}>Task Description
                        </TableCell>
                        <TableCell align="right" style={{ fontWeight: "bold"}}>Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {tasks.map((task) => (
                // <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }} >
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                // </li>
            ))
            }
            </TableBody>
            </Table>
        </TableContainer >
    );
}

export default TaskList;