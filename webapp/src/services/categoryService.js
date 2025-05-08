import api from "../api/api.js";

export const getCategories = async () => {
    const res = await api.get('/categories');
    return res.data.data;
};
