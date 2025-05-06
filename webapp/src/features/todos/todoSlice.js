import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getStatsTodos,
    getStatsPriorities,
    patchTodoStatus,
} from '../../services/todoService';

export const fetchStatsTodos = createAsyncThunk('stats/todos', getStatsTodos);
export const fetchStatsPriorities = createAsyncThunk('stats/priorities', getStatsPriorities);
export const updateTodoStatus = createAsyncThunk(
    'todos/updateStatus',
    async ({ id, status }) => await patchTodoStatus(id, status)
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        stats: {},
        priorities: {},
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchStatsTodos işlemi için durumları tanımla
            .addCase(fetchStatsTodos.pending, (state) => {
                state.loading = true; // Veriler yükleniyor
            })
            .addCase(fetchStatsTodos.fulfilled, (state, action) => {
                state.stats = action.payload; // action.payload'yi al
                state.loading = false; // Yükleme tamamlandı
            })
            .addCase(fetchStatsTodos.rejected, (state, action) => {
                state.loading = false; // Yükleme hatalı durumda da false
                state.error = action.error.message; // Hata mesajını kaydet
            })

            // fetchStatsPriorities işlemi için durumları tanımla
            .addCase(fetchStatsPriorities.pending, (state) => {
                state.loading = true; // Veriler yükleniyor
            })
            .addCase(fetchStatsPriorities.fulfilled, (state, action) => {
                state.priorities = action.payload; // action.payload'yi al
                state.loading = false; // Yükleme tamamlandı
            })
            .addCase(fetchStatsPriorities.rejected, (state, action) => {
                state.loading = false; // Yükleme hatalı durumda da false
                state.error = action.error.message; // Hata mesajını kaydet
            })

            // updateTodoStatus işlemi için durumları tanımla
            .addCase(updateTodoStatus.pending, (state) => {
                state.loading = true; // Status güncelleniyor
            })
            .addCase(updateTodoStatus.fulfilled, (state, action) => {
                state.loading = false; // Yükleme tamamlandı
                // Todo'nun durumunu güncelleyebilirsiniz
            })
            .addCase(updateTodoStatus.rejected, (state, action) => {
                state.loading = false; // Hata durumunda da loading false
                state.error = action.error.message; // Hata mesajını kaydet
            });
    },
});

export default todoSlice.reducer;
