import React from "react";
import { useNavigate } from "react-router-dom";
import Task from "./Task";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleCreateProject = () => {
        navigate("/newTask");
    };
    return (
        <div className="container mx-auto">
            <Task></Task>
            <button onClick={handleCreateProject} className="border p-3 m-2">
                Create a Project
            </button>
        </div>
    );
};

export default Dashboard;
