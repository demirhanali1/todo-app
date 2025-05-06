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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* Duruma göre istatistik kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <StatusCard status="Cancelled" count={dashboard.statusCount.cancelled} />
                        <StatusCard status="Completed" count={dashboard.statusCount.completed} />
                        <StatusCard status="In Progress" count={dashboard.statusCount.in_progress} />
                        <StatusCard status="Pending" count={dashboard.statusCount.pending} />
                    </div>
                </div>
            </div>

            {/* Yaklaşan görevler */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Yaklaşan Görevler</h2>
                <div className="space-y-4">
                    {dashboard.upcomingTodos?.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
