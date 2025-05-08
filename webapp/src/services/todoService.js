import api from '../api/api.js';
import axios from "axios";

export const getTodos = async (nextPage = null, searchParam = null, statusFilter = null) => {
    let res;

    if (nextPage === null) {
        res = await api.get('/todos', {
            headers: {
                'X-SEARCH-PARAM': searchParam,
                'X-STATUS-FILTER': statusFilter,
            }
        });
    } else {
        res = await axios.get(nextPage, {
            headers: {
                'Accept': 'application/json',
                'X-SEARCH-PARAM': searchParam,
                'X-STATUS-FILTER': statusFilter,
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
