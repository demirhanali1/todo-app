import api from '../api/api.js';

export const getTodoStats = async () => {
    const res = await api.get('/stats/todos');
    return res.data;
};

export const getUpcomingTodos = async () => {
    const res = await api.get('/todos?sort=due_date&order=asc&limit=5');
    return res.data.data;
};

export const patchTodoStatus = async (id, status) => {
    const res = await api.patch(`/todos/${id}`, { status });
    return res.data;
};
