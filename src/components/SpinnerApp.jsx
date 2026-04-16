const SpinnerApp = (WrappedComponent) => {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <div className="spinner">⏳ Loading data from Citi Servers...</div>
                </div>
            );
        }
        // When not loading, render the component and pass ALL props back
        return <WrappedComponent isLoading={isLoading} {...props} />;
    }
}

export default SpinnerApp;

