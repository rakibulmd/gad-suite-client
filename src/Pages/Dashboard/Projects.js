import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
    const url = "http://localhost:5000/api/v1/projects";
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await axios.get(url);
            setProjects(response.data.data);
        }
        getData();
    }, [url]);
    if (!projects) {
        return <div>Loading......</div>;
    }
    return (
        <div>
            <h2>Projects Count: {projects?.length}</h2>
            {projects.map((project) => (
                <Project key={project._id} project={project}></Project>
            ))}
        </div>
    );
};

export default Projects;
