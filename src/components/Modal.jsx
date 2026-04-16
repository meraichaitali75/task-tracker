import React from 'react';
import '../Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
    // If isOpen is false, return nothing
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            {/* stopPropagation prevents closing when clicking inside the white box */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;