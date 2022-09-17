import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
    const navigate = useNavigate();

    const handleViewDetailsBtn = (id) => {
        navigate(`/project/${id}`);
    };
    return (
        <div>
            <div className="bg-gray-200 p-3 mb-5">
                <h1>Project Name: {project.projectName}</h1>
                <div className="flex gap-3">
                    <p>Assigned By: {project.assignerName}</p>
                    <p>Received Data: {project.receivingDate}</p>
                    <p>Urn: {project.urn}</p>
                    <p>DSID: {project.dsid}</p>
                    <button
                        onClick={() => {
                            handleViewDetailsBtn(project._id);
                        }}
                        className="border p-3 m-2"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
