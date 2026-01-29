import React, { useState, useMemo } from 'react';
const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState();

    const addTodo = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInputValue('');

        alert(`InputValue: ${inputValue}`);
    }
    return (

        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <h2>Todo List</h2>

            <form onSubmit={addTodo}>
                <input type="inputValue"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What needs to be done?" />
                <button type="submit">Add</button>
            </form>

        </div>

    );

};

export default TodoApp;