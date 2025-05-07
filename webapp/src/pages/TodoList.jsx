import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/todoService.js';
import TodoItem from "../components/TodoItem.jsx";
import {updateTodoStatus} from "../features/todos/todoSlice.js";
import {useDispatch} from "react-redux";
import ServerSidePagination from "../components/ServerSidePagination.jsx";

const TodoList = () => {
    const dispatch = useDispatch();
    const [apiData, setApiData] = useState([]);

    const fetchTodos = async (nextPage = null) => {
        const response = await getTodos(nextPage);
        console.log(response);
        setApiData(response);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleStatusChange = (id, status) => {
        dispatch(updateTodoStatus({ id, status }));
    };

    return (
        <div className="dashboard-container">
            {/* Filtreleme ve Arama */}

            <div className="mt-4">
                <div className="todo-list">
                    {apiData.data && apiData.data.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
                    ))}
                </div>
            </div>

            <div className="mt-4">
                <ServerSidePagination
                    paginateData={apiData}
                />
            </div>
        </div>
    );
};

export default TodoList;
