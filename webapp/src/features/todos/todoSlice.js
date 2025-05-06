import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getTodoStats,
    getUpcomingTodos,
    patchTodoStatus,
} from '../../services/todoService';

export const fetchTodoStats = createAsyncThunk('todos/fetchStats', getTodoStats);
export const fetchUpcomingTodos = createAsyncThunk('todos/fetchUpcoming', getUpcomingTodos);
export const updateTodoStatus = createAsyncThunk(
    'todos/updateStatus',
    async ({ id, status }) => await patchTodoStatus(id, status)
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        stats: [],
        upcoming: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoStats.fulfilled, (state, action) => {
                state.stats = action.payload;
            })
            .addCase(fetchUpcomingTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUpcomingTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.upcoming = action.payload;
            })
            .addCase(updateTodoStatus.fulfilled, (state, action) => {
                const index = state.upcoming.findIndex(todo => todo.id === action.payload.id);
                if (index !== -1) {
                    state.upcoming[index] = action.payload;
                }
            });
    },
});

export default todoSlice.reducer;
