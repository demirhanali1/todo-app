import './App.css'
import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from "./pages/TodoList.jsx";
import TodoCreate from "./pages/TodoCreate.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/todos" element={<TodoList />} />
                    <Route path="/todo-create" element={<TodoCreate />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
