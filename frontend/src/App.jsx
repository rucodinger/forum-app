import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register/Register.jsx";
import Main from "./pages/Main/Main.jsx";
// import Users from "./pages/Users";
// import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                {/*<Route path="/users" element={<Users />} />*/}
                {/*<Route path="/login" element={<Login />} />*/}
                <Route path="*" element={<Main />} /> {/* По умолчанию */}
            </Routes>
        </Router>
    );
}

export default App;