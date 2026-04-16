import React, { useState, useEffect } from 'react';
import Modal from './Modal'

const ModalApp = () => {
    // If isOpen is false, return nothing
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <button
                onClick={handleModalOpen}
                className="open-button"
            >
                Open Modal
            </button>
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                title="More Information"
            >
                <p>This information was hidden until you clicked the button!</p>
                <button onClick={handleModalClose}>Got it!</button>
            </Modal>
        </div>
    );
};

export default ModalApp;

