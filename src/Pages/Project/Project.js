import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {
    const { projectId } = useParams();
    return <div>This is project overview {projectId}</div>;
};

export default Project;
