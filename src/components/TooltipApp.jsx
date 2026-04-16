import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
const TooltipApp = () => {

    const [show, setShow] = useState(false);
    const btnEff = useRef(null);
    const tipEff = useRef(null);
    const [topEff, setTopEff] = useState(0);

    useEffect(() => {
        if (show && btnEff.current && tipEff.current) {
            const { bottom } = btnEff.current.getBoundingClientRect();
            setTopEff(bottom + 10);
        }
    }, [show]);

    return (
        <div style={{ padding: '50px', display: 'flex', gap: '100px', }}>

            <div style={{ width: "200px", display: 'flex', justifyContent: 'center' }}>
                <button ref={btnEff} onClick={() => setShow(!show)}>Toggle</button>
                {show && (
                    <div ref={tipEff} style={{ position: 'absolute', top: `${topEff}px`, background: 'red', color: 'white' }}>
                        I am useEffect!
                    </div>
                )}
            </div>
        </div>
    );
};
export default TooltipApp;