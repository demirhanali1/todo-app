import React from 'react';

const StatusCard = ({ status, count }) => {
    return (
        <div className="status-card">
            <h3>{status}</h3>
            <p>{count}</p>
        </div>
    );
};

export default StatusCard;
