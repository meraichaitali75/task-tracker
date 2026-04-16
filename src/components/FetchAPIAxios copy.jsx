import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import '../UserTable.css'; // <--- Import your CSS here

const UserList = () => {
    // 1. Define states for data, loading, and errors
    const [users, setUsers] = useState(() => {
        const savedUseres = localStorage.getItem('citi_users');
        return savedUseres ? JSON.parse(savedUseres) : [];
    });

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    // const [query, setQuery] = useState("");

    useEffect(() => {
        // 2. Use a separate function or an IIFE for async logic
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                // Using a free placeholder API
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);

                // 2. SAVE: Store the fetched data into LocalStorage
                // localStorage.setItem('citi_users', JSON.stringify(response.data))

                setError(null);
            } catch (err) {
                // 4. Handle errors (e.g., network issues or 404)
                setError("Failed to fetch user data. Please try again later.");
                console.error("Fetch Error:", err);
            } finally {
                // 5. Always stop the loading spinner
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []); // Empty array means this runs once on mount


    // 3. AUTO-UPDATE: Sync localstorage whenever 'users' state changes
    // useEffect(() => {
    //     if (users.length > 0) {
    //         localStorage.setItem('citi_users', JSON.stringify(users));
    //     }
    // }, [users]);

    // const filteredData = useMemo(() => {
    //     console.log("Filtering logic running...");
    //     return users.filter(item =>
    //         item.email.toLowerCase().includes(query.toLowerCase())
    //     );
    // }, [query, users]);

    // 6. Conditional Rendering for UI feedback
    if (isLoading) return <div style={{ padding: '20px' }}> Loading Users...</div>;
    if (error) return <div style={{ color: 'red', padding: '20px' }}> {error}</div>;

    return (
        <div className="citi-table-container">
            <h2>Citi User Directory</h2>

            {/* <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name..."
                    style={{ padding: '8px', width: '250px' }}
                />

            </div> */}

            <table className="citi-table">
                <thead>
                    <tr>
                        <th className="table-header">ID</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id} className="table-row">
                                <td className="table-cell">{user.id}</td>
                                <td className="table-cell">{user.name}</td>
                                <td className="table-cell">{user.email}</td>
                                <td className="table-cell">{user.company.name}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                                No users found matching "{query}"
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};


export default UserList;