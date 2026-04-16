// src/components/LazyLoader.jsx
import React, { useState, lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

// Dynamic import
const AnalyticsDashboard = lazy(() => import('./HeavySetting'));

const LazyLoader = () => {
    const [showDashboard, setShowDashboard] = useState(false);

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h2>Kitchener Tech Manager</h2>
            <button onClick={() => setShowDashboard(true)}>
                View Analytics (Lazy)
            </button>

            <Suspense fallback={<div style={{ margin: '10px' }}>⌛ Loading Dashboard...</div>}>
                {showDashboard && <AnalyticsDashboard />}
            </Suspense>

            <Suspense fallback={<div style={{ margin: '10px' }}>⌛ Loading Dashboard...</div>}>
                {showDashboard && <AnalyticsDashboard />}
            </Suspense>
        </div>
    );
};

export default LazyLoader;