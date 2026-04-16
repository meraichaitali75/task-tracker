import React, { useState, useEffect } from 'react';
import SpinnerApp from './SpinnerApp';
import '../UserTable.css';

const DataFetcher = ({ isLoading: externalLoading }) => {
    const [users, setUsers] = useState([]);
    const [internalLoading, setInternalLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInternalLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) throw new Error(`HTTP ERROR! status: ${response.status}`);
                
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setInternalLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) return <div className="status error">Error: {error}</div>;

    return (
        <div className="citi-table-container">
            <h2>Citi User Directory</h2>
            <table className="citi-table">
                <thead>
                    <tr>
                        <th className="table-header">ID</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="table-row">
                            <td className="table-cell">{user.id}</td>
                            <td className="table-cell">{user.name}</td>
                            <td className="table-cell">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// NOTE: For the spinner to show, App.jsx must pass <DataFetcher isLoading={true} />
export default SpinnerApp(DataFetcher);