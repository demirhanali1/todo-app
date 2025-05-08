import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchDashboardApi, updateTodoStatus} from '../features/todos/todoSlice';
import StatusCard from '../components/StatusCard';
import TodoItem from '../components/TodoItem';
import StatePagination from "../components/StatePagination.jsx";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { dashboard, loading } = useSelector((state) => state.todos);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchDashboardApi());
    }, [dispatch]);

    const handleStatusChange = (id, status) => {
        dispatch(updateTodoStatus({ id, status }));
    };

    if (loading) {
        return <div>Yükleniyor...</div>;  // Burada loading spinner ya da message kullanabilirsin
    }

    const todosPerPage = 5;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = dashboard.upcomingTodos?.slice(indexOfFirstTodo, indexOfLastTodo);
    const totalPages = Math.ceil((dashboard.upcomingTodos?.length || 0) / todosPerPage);

    return (
        <div className="dashboard-container">
            <h1 className="section-title">Dashboard</h1>

            <div className="nav-buttons">
                <button className="nav-btn" onClick={() => navigate('/todos')}>Todo List</button>
                <button className="nav-btn" onClick={() => navigate('/todo-create')}>Todo Oluştur</button>
            </div>

            <div className="status-grid">
                <StatusCard status="Cancelled" count={dashboard.statusCount.cancelled} />
                <StatusCard status="Completed" count={dashboard.statusCount.completed} />
                <StatusCard status="In Progress" count={dashboard.statusCount.in_progress} />
                <StatusCard status="Pending" count={dashboard.statusCount.pending} />
            </div>

            <div>
                <h2 className="section-title">Yaklaşan Görevler</h2>
                <div className="todo-list">
                    {currentTodos?.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
                    ))}
                </div>

                <StatePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Dashboard;
