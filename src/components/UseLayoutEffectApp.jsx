import React, { useState, useRef, useLayoutEffect } from 'react';

function UseLayoutEffectApp() {
    const [value, setValue] = useState(0);
    const boxRef = useState(null);

    useLayoutEffect(() => {

        // if (boxRef.current) {
        if (value && boxRef.current) {
            const rect = boxRef.current.getBoundingClientRect();
            console.log("Box height is:", rect.height)
        }
    }, [value]); // Only runs when 'show' changes to true
    // }, []); // Runs after the first render

    return (
        <div reft={boxRef} onClick={() => setValue(Math.random())}>
            Click to change a value: {value}
        </div>
    );
}

export default UseLayoutEffectApp;