import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormLabel from "../Forms/FormLabel";

const AddTaskForm = ({ updateData, setUpdateData, projectId }) => {
    const addTaskToProjectURL = `http://localhost:5000/api/v1/projects/${projectId}`;
    const [formVisible, setFormVisible] = useState(false);
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const putData = async () => {
            const response = await axios.put(addTaskToProjectURL, {
                taskData: data,
            });
            if (response.data.success === "true") {
                console.log(response);
                setUpdateData(!updateData);
            }
        };
        putData();
    };
    return (
        <div>
            <button
                onClick={() => setFormVisible(!formVisible)}
                className={`${
                    formVisible ? "hidden" : "visible"
                } p-3 border border-gray-600 m-3`}
            >
                Add a Task
            </button>
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={` ${
                        formVisible ? "visible" : "hidden"
                    } mx-auto bg-gray-200 rounded-lg p-2`}
                >
                    <div className=" grid grid-cols-6 gap-4">
                        <div>
                            <FormLabel
                                label="Task Name"
                                labelId="task-name"
                            ></FormLabel>
                            <input
                                id="task-name"
                                type="text"
                                className={`bg-gray-50 border ${
                                    errors.taskName
                                        ? "border-red-500"
                                        : "border-gray-400"
                                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                                placeholder="OA Static"
                                {...register("taskName", { required: true })}
                            />
                            {errors.taskName?.type === "required" && (
                                <span className="text-rose-600">
                                    Please enter task name
                                </span>
                            )}
                        </div>
                        <div>
                            <FormLabel
                                label="Deliverables"
                                labelId="deliverables"
                            ></FormLabel>
                            <select
                                id="deliverables"
                                className={`bg-gray-50 border ${
                                    errors.deliverables
                                        ? "border-red-500"
                                        : "border-gray-400"
                                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                                {...{
                                    ...register("deliverables", {
                                        required: true,
                                    }),
                                }}
                            >
                                <option value="globalPackaging">
                                    Global Packaging
                                </option>
                                <option value="globalPackaging+">
                                    Global Packaging+
                                </option>
                                <option value="flightCheck">
                                    Flight Check
                                </option>
                                <option value="videoQA">Video QA</option>
                                <option value="globalMaster">
                                    Global Master
                                </option>
                            </select>
                        </div>
                        <div>
                            <FormLabel
                                label="Assigned To"
                                labelId="assignedTo"
                            ></FormLabel>
                            <select
                                id="assignedTo"
                                className={`bg-gray-50 border ${
                                    errors.assignedTo
                                        ? "border-red-500"
                                        : "border-gray-400"
                                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                                {...{
                                    ...register("assignedTo", {
                                        required: true,
                                    }),
                                }}
                            >
                                <option value="anasisMajumber">
                                    Anasis Majumbder
                                </option>
                                <option value="badrulHaque">
                                    Badrul Haque
                                </option>
                                <option value="abdurRahim">Abdur Rahim</option>
                                <option value="mdRakibulIslam">
                                    Md Rakibul Islam
                                </option>
                                <option value="poppy">Poppy</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-2">
                            <input
                                className="border p-3  bg-gray-300"
                                type="submit"
                                value="Create Project"
                            />
                        </div>
                        <div className="mt-2">
                            <button
                                onClick={() => {
                                    reset({ taskName: "" });
                                }}
                                className="p-3 px-7 bg-sky-300"
                            >
                                Clear
                            </button>
                        </div>
                        <div className="mt-2">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setFormVisible(!formVisible);
                                }}
                                className="p-3 px-7 bg-sky-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskForm;
