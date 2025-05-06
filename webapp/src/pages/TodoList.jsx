import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/todoService.js';

const TodoList = () => {
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

    const handleToggleStatus = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, status: todo.status === 'done' ? 'pending' : 'done' } : todo
            )
        );
    };

    const handleEdit = (id) => {
        console.log('Edit', id);
    };

    const handleDelete = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <div className="p-4 space-y-4">
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

            {/* Todo Kartları */}
            <div className="space-y-2">
                {todos.map((todo) => (
                    <div key={todo.id} className="border p-4 rounded shadow-sm flex justify-between items-center">
                        <div>
                            <div className="font-semibold">{todo.title}</div>
                            <div className="text-sm text-gray-600">
                                Durum: {todo.status} | Öncelik: {todo.priority}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleToggleStatus(todo.id)}
                                className="px-2 py-1 border rounded text-sm"
                            >
                                {todo.status === 'done' ? '✔' : '○'}
                            </button>
                            <button
                                onClick={() => handleEdit(todo.id)}
                                className="px-2 py-1 border rounded text-sm"
                            >
                                Düzenle
                            </button>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="px-2 py-1 border rounded text-red-600 text-sm"
                            >
                                Sil
                            </button>
                        </div>
                    </div>
                ))}
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
