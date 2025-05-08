import React from 'react';

const TodoItem = ({ todo, onStatusChange }) => {
    const statuses = ['pending', 'in_progress', 'completed', 'cancelled'];
    const statusColors = {
        pending: "#f0ad4e",
        in_progress: "#5bc0de",
        completed: "#5cb85c",
        cancelled: "#d9534f",
    };

    const priorityColors = {
        low: "#5bc0de",
        medium: "#f0ad4e",
        high: "#d9534f",
    };

    return (
        <div className="todo-card">
            <div className="todo-card-header">
                <div className="title-section">
                    <h3 className="todo-title">{todo.title}</h3>
                    <span
                        className="status-badge"
                        style={{ backgroundColor: statusColors[todo.status] }}
                    >
                        {todo.status.replace("_", " ")}
                    </span>
                </div>
                <span
                    className="priority-dot"
                    style={{ backgroundColor: priorityColors[todo.priority] }}
                    title={`Öncelik: ${todo.priority}`}
                ></span>
            </div>

            <p className="todo-date">Bitiş: {todo.due_date}</p>

            <div className="todo-card-footer">
                <select
                    value={todo.status}
                    onChange={(e) => onStatusChange(todo.id, e.target.value)}
                    className="status-select"
                >
                    {statuses.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>

                <div className="todo-actions">
                    <button className="edit-btn">Düzenle</button>
                    <button className="delete-btn">Sil</button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
