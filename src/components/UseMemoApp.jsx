import React, { useState, useMemo } from 'react';


const UseMemoApp = ({ transactions = [] }) => {
    const [query, setQuery] = useState("");
    const [count, setCount] = useState(0); // Trigger re-renders

    // Expensive filtering logic
    const filteredData = useMemo(() => {
        if (!transactions.length) return [];

        console.log("Filtering transactions..."); // This only runs when 'query' changes
        return transactions.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));
    }, [query, transactions]);

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
            
            <button onClick={() => setCount(count + 1)}>Re-render Count: {count}</button>

            <ul>
                {filteredData.map(t => <li key={t.id}>{t.name}</li>)}
            </ul>
            {filteredData.length === 0 && <p>No transactions found.</p>}
        </div>
    );
}

export default UseMemoApp;