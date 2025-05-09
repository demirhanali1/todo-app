import React, {useState} from 'react';
import ConfirmModal from "./ConfirmModal.jsx";
import {deleteTodo} from "../services/todoService.js";
import {useNavigate} from "react-router-dom";

const TodoItem = ({ todo, onStatusChange }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
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

    const handleDelete = async () => {
        await deleteTodo(todo.id);
        setShowModal(false);
        navigate(0);
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
                    <button className="delete-btn" onClick={() => setShowModal(true)}>Sil</button>
                </div>

                <ConfirmModal
                    isOpen={showModal}
                    title="Emin misiniz?"
                    message="Bu öğeyi silmek istediğinize emin misiniz?"
                    onConfirm={handleDelete}
                    onCancel={() => setShowModal(false)}
                />
            </div>
        </div>
    );
};

export default TodoItem;
