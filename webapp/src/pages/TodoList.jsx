import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/todoService.js';
import TodoItem from "../components/TodoItem.jsx";
import {updateTodoStatus} from "../features/todos/todoSlice.js";
import {useDispatch} from "react-redux";

const TodoList = () => {
    const dispatch = useDispatch();
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const fetchTodos = async () => {
        const query = new URLSearchParams();
        if (searchTerm) query.append('search', searchTerm);
        if (statusFilter) query.append('status', statusFilter);
        if (priorityFilter) query.append('priority', priorityFilter);
        query.append('page', currentPage);

        const response = await getTodos(`?${query.toString()}`);
        setTodos(response.data);
        setLastPage(response.meta.last_page);
    };

    useEffect(() => {
        fetchTodos();
    }, [searchTerm, statusFilter, priorityFilter, currentPage]);

    const handleStatusChange = (id, status) => {
        dispatch(updateTodoStatus({ id, status }));
    };

    return (
        <div className="dashboard-container">
            {/* Filtreleme ve Arama */}
            <div className="flex flex-wrap gap-2">
                <input
                    type="text"
                    placeholder="Ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full max-w-xs"
                />
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Tümü</option>
                    <option value="pending">Bekliyor</option>
                    <option value="done">Tamamlandı</option>
                </select>
                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Tümü</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div className="mt-4">
                <div className="todo-list">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
                    ))}
                </div>
            </div>

            {/* Sayfalama */}
            <div className="flex justify-center gap-2 pt-4 flex-wrap">
                {Array.from({ length: lastPage }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 border rounded ${
                            currentPage === i + 1 ? 'bg-blue-600 text-white' : ''
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
