import React from 'react';

const TodoItem = ({ todo, onStatusChange }) => {
    const statuses = ['pending', 'in_progress', 'completed'];

    return (
        <div className="todo-item">
            <div>
                <h4>{todo.title}</h4>
                <p>{todo.due_date}</p>
            </div>
            <select
                value={todo.status}
                onChange={(e) => onStatusChange(todo.id, e.target.value)}
            >
                {statuses.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>

            <div>
                <button
                    className="edit-btn"
                >
                    Düzenle
                </button>

                <button
                    className="delete-btn"
                >
                    Sil
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
