import React from 'react';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h3>{title || "Onayla"}</h3>
                <p>{message || "Devam etmek istiyor musunuz?"}</p>
                <div className="modal-buttons">
                    <button className="btn-yes" onClick={onConfirm}>Evet</button>
                    <button className="btn-no" onClick={onCancel}>Hayır</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
