import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';

function UseEffectApp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // This happens AFTER the number changes on the screen
        document.title = `Count is ${count}`;
        console.log("Effect ran: User already sees the new count.");
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

export default UseEffectApp;