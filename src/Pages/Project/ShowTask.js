import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TaskDeliverables from "./TaskDeliverables";

const ShowTask = ({ task, projectId }) => {
    const { register, control, handleSubmit } = useForm();
    const [currentEditableItem, setCurrentEditableItem] = useState(null);

    const [assignedTo, setAssignedTo] = useState(task.assignedTo);

    return (
        <div className="grid grid-cols-3 mb-2 shadow-md p-1 bg-gray-200">
            <div className="flex">
                <Controller
                    control={control}
                    name="folderSelect"
                    defaultValue=""
                    render={({ name }) => (
                        <input
                            id={task.task_id + "taskName"}
                            onBlur={(e) => {
                                console.log(e.target.value);
                                setCurrentEditableItem(null);
                            }}
                            defaultValue={task?.taskName}
                            name={name}
                            disabled={
                                currentEditableItem ===
                                task.task_id + "taskName"
                                    ? false
                                    : true
                            }
                        ></input>
                    )}
                />
                <label
                    onClick={() => {
                        setCurrentEditableItem(task.task_id + "taskName");
                    }}
                    htmlFor={task.task_id + "taskName"}
                >
                    Edit
                </label>
            </div>
            <TaskDeliverables
                projectId={projectId}
                task={task}
                setCurrentEditableItem={setCurrentEditableItem}
                currentEditableItem={currentEditableItem}
            ></TaskDeliverables>
            <div className="flex">
                <Controller
                    control={control}
                    name="folderSelect"
                    onChange={() => console.log("hello")}
                    defaultValue=""
                    render={({ name }) => (
                        <select
                            id={task.task_id + "assignedTo"}
                            onChange={(e) => {
                                setAssignedTo(e.target.value);
                            }}
                            onBlur={(e) => setCurrentEditableItem(null)}
                            value={assignedTo}
                            disabled={
                                currentEditableItem ===
                                task.task_id + "assignedTo"
                                    ? false
                                    : true
                            }
                        >
                            <option value="anasisMajumber">
                                Anasis Majumbder
                            </option>
                            <option value="badrulHaque">Badrul Haque</option>
                            <option value="abdurRahim">Abdur Rahim</option>
                            <option value="mdRakibulIslam">
                                Md Rakibul Islam
                            </option>
                            <option value="poppy">Poppy</option>
                        </select>
                    )}
                />
                <label
                    onClick={() => {
                        setCurrentEditableItem(task.task_id + "assignedTo");
                    }}
                    htmlFor={task.task_id + "assignedTo"}
                >
                    Edit
                </label>
            </div>
        </div>
    );
};

export default ShowTask;
