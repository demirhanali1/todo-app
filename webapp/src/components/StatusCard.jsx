import React from 'react';

const StatusCard = ({ status, count }) => {
    return (
        <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-lg font-medium capitalize">{status}</h3>
            <p className="text-2xl font-bold">{count}</p>
        </div>
    );
};

export default StatusCard;
