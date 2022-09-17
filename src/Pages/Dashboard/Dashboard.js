import React from "react";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleCreateProject = () => {
        navigate("/newTask");
    };
    return (
        <div className="container mx-auto">
            {/* <Task></Task> */}
            <button onClick={handleCreateProject} className="border p-3 m-2">
                Create a Project
            </button>
            <Projects></Projects>
        </div>
    );
};

export default Dashboard;
