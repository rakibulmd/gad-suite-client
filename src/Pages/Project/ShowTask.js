import React from "react";

const ShowTask = ({ task }) => {
    return (
        <div>
            <h2>Task Name: {task?.taskName}</h2>
        </div>
    );
};

export default ShowTask;
