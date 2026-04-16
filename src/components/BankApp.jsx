import React, { useReducer } from 'react';
import { appReducer, initialAppState } from './accountReducer';

const JobWizard = () => {
    const [state, dispatch] = useReducer(appReducer, initialAppState);

    if (state.isSubmitted) return <h2>✅ Application Sent to Kitchener Tech Firm!</h2>;

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h3>Step {state.step} of 3</h3>

            {state.step === 1 && (
                <input
                    placeholder="Full Name"
                    onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })}
                />
            )}

            {state.step === 2 && (
                <input
                    placeholder="Email Address"
                    onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'email', value: e.target.value })}
                />
            )}

            {state.step === 3 && (
                <p>Reviewing application for: <strong>{state.formData.name}</strong></p>
            )}

            <div style={{ marginTop: '10px' }}>
                {state.step > 1 && <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>Previous</button>}
                {state.step < 3 ? (
                    <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>Next</button>
                ) : (
                    <button onClick={() => dispatch({ type: 'SUBMIT' })}>Submit Application</button>
                )}
            </div>
        </div>
    );
};

export default JobWizard;