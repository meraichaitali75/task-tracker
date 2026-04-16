export const initialAppState = {
    step: 1,
    formData: { name: '', email: '', portfolio: '' },
    isSubmitted: false
};

export function appReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                formData: { ...state.formData, [action.field]: action.value }
            };
        case 'NEXT_STEP':
            return { ...state, step: state.step + 1 };
        case 'PREVIOUS_STEP':
            return { ...state, step: state.step - 1 };
        case 'SUBMIT':
            return { ...state, isSubmitted: true };
        default:
            return state;
    }
}