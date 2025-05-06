import api from '../api/api.js';

export const getTodos = async () => {
    const res = await api.get('/todos');
    return res.data.data;
};

export const getDashboardApi = async () => {
    const res = await api.get('/dashboard');
    return res.data.data;
};

export const patchTodoStatus = async (id, status) => {
    const res = await api.patch(`/todos/${id}`, { status });
    return res.data;
};
