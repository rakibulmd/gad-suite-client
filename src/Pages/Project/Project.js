import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Project = () => {
    const { projectId } = useParams();
    const url = `http://localhost:5000/api/v1/projects/project?projectId=${projectId}`;
    const [project, setProject] = useState({});

    useEffect(() => {
        async function getData() {
            console.log(url);
            const response = await axios.get(url);
            setProject(response.data.data);
        }
        getData();
    }, [url]);

    return (
        <div>
            This is project overview {projectId}
            <h2>{project?.projectName}</h2>
        </div>
    );
};

export default Project;
