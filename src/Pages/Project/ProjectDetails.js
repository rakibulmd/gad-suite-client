import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AddTaskForm from "./AddTaskForm";
import ShowTask from "./ShowTask";

const ProjectDetails = () => {
    const [updateData, setUpdateData] = useState(false);
    const { projectId } = useParams();
    const url = `http://localhost:5000/api/v1/projects/project?projectId=${projectId}`;
    const [project, setProject] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await axios.get(url);
            setProject(response.data.data);
            console.log(response.data.data);
        }
        getData();
    }, [url, updateData]);

    return (
        <div className="container mx-auto">
            <h2>{project?.projectName}</h2>
            <AddTaskForm
                projectId={projectId}
                setUpdateData={setUpdateData}
                updateData={updateData}
            ></AddTaskForm>
            <div className="grid grid-cols-3">
                <div>Task Name</div>
                <div>Deliverables</div>
                <div>Assigned to</div>
            </div>
            {project?.tasks &&
                project?.tasks.map((task) => (
                    <ShowTask
                        key={task.task_id}
                        task={task}
                        projectId={projectId}
                    ></ShowTask>
                ))}
        </div>
    );
};

export default ProjectDetails;
