import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Pages/Login/RequireAuth";
import NewTask from "./Pages/NewTask/NewTask";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Home></Home>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/home"
                    element={
                        <RequireAuth>
                            <Home></Home>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/newTask"
                    element={
                        <RequireAuth>
                            <NewTask></NewTask>
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
