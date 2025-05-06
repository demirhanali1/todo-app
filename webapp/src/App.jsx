import './App.css'
import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from "./pages/TodoList.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/todos" element={<TodoList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
