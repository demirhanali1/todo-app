import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoStats, fetchUpcomingTodos, updateTodoStatus } from '../features/todos/todoSlice';
import StatusCard from '../components/StatusCard';
import TodoItem from '../components/TodoItem';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { stats, upcoming, loading } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodoStats());
        dispatch(fetchUpcomingTodos());
    }, [dispatch]);

    const handleStatusChange = (id, status) => {
        dispatch(updateTodoStatus({ id, status }));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* Duruma göre istatistik kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {stats.map((item) => (
                    <StatusCard key={item.status} status={item.status} count={item.count} />
                ))}
            </div>

            {/* Yaklaşan görevler */}
            <div>
                <h2 className="text-xl font-semibold mb-2">Yaklaşan Görevler</h2>
                {loading ? (
                    <p>Yükleniyor...</p>
                ) : (
                    <div className="space-y-2">
                        {upcoming.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
