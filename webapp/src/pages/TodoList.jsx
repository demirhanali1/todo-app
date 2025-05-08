import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/todoService.js';
import TodoItem from "../components/TodoItem.jsx";
import {updateTodoStatus} from "../features/todos/todoSlice.js";
import {useDispatch} from "react-redux";
import ServerSidePagination from "../components/ServerSidePagination.jsx";
import {useNavigate} from "react-router-dom";

const TodoList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const fetchTodos = async (nextPage = null) => {
        const response = await getTodos(nextPage, searchQuery, statusFilter);
        console.log(response);
        setApiData(response);
    };

    useEffect(() => {
        fetchTodos();
    }, [searchQuery, statusFilter]);

    const handleStatusChange = (id, status) => {
        dispatch(updateTodoStatus({ id, status }));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };

    return (
        <div className="dashboard-container">
            <div className="d-flex mb-4">
                <button className="pagination-button" onClick={() => navigate('/')}>Geri Dön</button>
                <h1 className="section-title marginLeft">Todo List</h1>
            </div>

            {/* Filtreleme ve Arama */}
            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Todo ara..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border rounded px-3 py-2 w-full"
                />
                <select
                    value={statusFilter}
                    onChange={handleFilterChange}
                    className="border rounded px-3 py-2"
                >
                    <option value="">Tümü</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">InProgress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>

            <div className="mt-4">
                <div className="todo-list">
                    {apiData.data && apiData.data.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
                    ))}
                </div>
            </div>

            <div className="mt-4">
                <ServerSidePagination
                    paginateData={apiData}
                    onPageChange={(page) => fetchTodos(page)}
                />
            </div>
        </div>
    );
};

export default TodoList;
