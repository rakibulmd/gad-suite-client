import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Pages/Login/RequireAuth";
import ProjectForm from "./Pages/Forms/ProjectForm";
import ProjectDetails from "./Pages/Project/ProjectDetails";
import NotFound from "./Pages/NotFound/NotFound";
import CssValue from "./Pages/CssValue/CssValue";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { RemoveScrollBar, zeroRightClassName } from "react-remove-scroll-bar";

function App() {
    const [user, loading] = useAuthState(auth);
    return (
        <React.Fragment>
            <CssBaseline />
            {/* <RemoveScrollBar /> */}
            <div className={zeroRightClassName}>
                {user && <Header></Header>}
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
                                <ProjectForm></ProjectForm>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="/project/:projectId"
                        element={
                            <RequireAuth>
                                <ProjectDetails></ProjectDetails>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="/css-value"
                        element={
                            <RequireAuth>
                                <CssValue></CssValue>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                </Routes>
            </div>
        </React.Fragment>
    );
}

export default App;
