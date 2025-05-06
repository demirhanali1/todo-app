import React from 'react';

const TodoItem = ({ todo, onStatusChange }) => {
    const statuses = ['pending', 'in_progress', 'completed'];

    return (
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <div>
                <h4 className="font-semibold">{todo.title}</h4>
                <p className="text-sm text-gray-600">{todo.due_date}</p>
            </div>
            <select
                value={todo.status}
                onChange={(e) => onStatusChange(todo.id, e.target.value)}
                className="border rounded p-1"
            >
                {statuses.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TodoItem;
