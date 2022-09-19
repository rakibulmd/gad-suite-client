import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ShowTask = ({ task }) => {
    const { register, control, handleSubmit } = useForm();
    const [currentEditableItem, setCurrentEditableItem] = useState(null);
    const [deliverable, setDeliverable] = useState(task.deliverables);
    const [assignedTo, setAssignedTo] = useState(task.assignedTo);
    const deliverables = [
        "Global Packaging",
        "Global Packaging+",
        "Flight Check",
        "Video QA",
        "Global Master",
    ];
    return (
        <div className="grid grid-cols-3 mb-2 shadow-md p-1">
            <div className="flex">
                <Controller
                    control={control}
                    name="folderSelect"
                    defaultValue=""
                    render={({ name }) => (
                        <input
                            type="text"
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
            <div className="flex">
                <Controller
                    control={control}
                    name="folderSelect"
                    onChange={() => console.log("hellow")}
                    defaultValue=""
                    render={({ name }) => (
                        <select
                            id={task.task_id + "deliverables"}
                            onChange={(e) => {
                                setDeliverable(e.target.value);
                            }}
                            onBlur={(e) => setCurrentEditableItem(null)}
                            value={deliverable}
                            disabled={
                                currentEditableItem ===
                                task.task_id + "deliverables"
                                    ? false
                                    : true
                            }
                        >
                            <option value="globalPackaging">
                                Global Packaging
                            </option>
                            <option value="globalPackaging+">
                                Global Packaging+
                            </option>
                            <option value="flightCheck">Flight Check</option>
                            <option value="videoQA">Video QA</option>
                            <option value="globalMaster">Global Master</option>
                        </select>
                    )}
                />
                <label
                    onClick={() => {
                        setCurrentEditableItem(task.task_id + "deliverables");
                    }}
                    htmlFor={task.task_id + "deliverables"}
                >
                    Edit
                </label>
            </div>
            <div className="flex">
                <Controller
                    control={control}
                    name="folderSelect"
                    onChange={() => console.log("hellow")}
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
