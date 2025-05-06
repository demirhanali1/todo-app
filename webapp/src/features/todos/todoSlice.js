import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    patchTodoStatus, getDashboardApi,
} from '../../services/todoService';

export const fetchDashboardApi = createAsyncThunk('todos/dashboard', getDashboardApi);
export const updateTodoStatus = createAsyncThunk(
    'todos/updateStatus',
    async ({ id, status }) => await patchTodoStatus(id, status)
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        dashboard: {},
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchStatsTodos işlemi için durumları tanımla
            .addCase(fetchDashboardApi.pending, (state) => {
                state.loading = true; // Veriler yükleniyor
            })
            .addCase(fetchDashboardApi.fulfilled, (state, action) => {
                state.dashboard = action.payload; // action.payload'yi al
                state.loading = false; // Yükleme tamamlandı
            })
            .addCase(fetchDashboardApi.rejected, (state, action) => {
                state.loading = false; // Yükleme hatalı durumda da false
            })
            .addCase(updateTodoStatus.fulfilled, (state, action) => {
                const todoId = action.meta.arg.id;
                const todoStatus = action.meta.arg.status;

                const todo = state.dashboard.upcomingTodos.find(t => t.id === todoId);
                if (todo) {
                    todo.status = todoStatus;
                }
            });
    },
});

export default todoSlice.reducer;
