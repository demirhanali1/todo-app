import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice.js';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export default store;
