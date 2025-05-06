import api from '../api/api.js';

export const getStatsTodos = async () => {
    const res = await api.get('/stats/todos');
    return res.data.data;
};

export const getStatsPriorities = async () => {
    const res = await api.get('/stats/priorities');
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
