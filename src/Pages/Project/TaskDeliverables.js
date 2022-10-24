import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TaskDeliverables = ({
    task,
    currentEditableItem,
    setCurrentEditableItem,
    projectId,
}) => {
    const deliverablesList = [
        "Global Packaging",
        "Global Packaging+",
        "Flight Check",
        "Video QA",
        "Global Master",
    ];
    const { control } = useForm();
    const [deliverable, setDeliverable] = useState(task.deliverables);
    const updateTaskDeliverablesUrl = `http://localhost:5000/api/v1/projects/updateTask/${projectId}?taskId=${task.task_id}&field=deliverables`;
    const handleDeliverablesChange = async (e) => {
        const response = await axios.put(updateTaskDeliverablesUrl, {
            updateTaskData: { value: e.target.value },
        });
        if (response?.data?.result?.modifiedCount) {
            console.log("successfully updated task deliverables");
        }
        console.log(response);
    };
    return (
        <div className="flex">
            <Controller
                control={control}
                name="folderSelect"
                defaultValue=""
                render={() => (
                    <select
                        id={task.task_id + "deliverables"}
                        onChange={(e) => {
                            setDeliverable(e.target.value);
                            handleDeliverablesChange(e);
                        }}
                        onBlur={() => setCurrentEditableItem(null)}
                        value={deliverable}
                        disabled={
                            currentEditableItem ===
                            task.task_id + "deliverables"
                                ? false
                                : true
                        }
                    >
                        {deliverablesList?.map((deliverableItem, index) => (
                            <option value={deliverableItem} key={index}>
                                {deliverableItem}
                            </option>
                        ))}
                    </select>
                )}
            />
            <label
                className="cursor-pointer"
                onClick={() => {
                    setCurrentEditableItem(task.task_id + "deliverables");
                }}
                htmlFor={task.task_id + "deliverables"}
            >
                Edit
            </label>
        </div>
    );
};

export default TaskDeliverables;
