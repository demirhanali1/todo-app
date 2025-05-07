import api from '../api/api.js';
import axios from "axios";

export const getTodos = async (nextPage = null) => {
    let res;

    if (nextPage === null) {
        res = await api.get('/todos');
    } else {
        res = await axios.get(nextPage, {
            headers: {
                'Accept': 'application/json',
            },
        });
    }

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
