import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchDashboardApi, updateTodoStatus} from '../features/todos/todoSlice';
import StatusCard from '../components/StatusCard';
import TodoItem from '../components/TodoItem';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { dashboard, loading } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchDashboardApi());
    }, [dispatch]);

    const handleStatusChange = (id, status) => {
        dispatch(updateTodoStatus({ id, status }));
    };

    if (loading) {
        return <div>Yükleniyor...</div>;  // Burada loading spinner ya da message kullanabilirsin
    }

    return (
        <div className="dashboard-container">
            <h1 className="section-title">Dashboard</h1>

            <div className="nav-buttons">
                <button className="nav-btn">Tüm Görevler</button>
                <button className="nav-btn">Yeni Görev Ekle</button>
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
                    {dashboard.upcomingTodos?.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
