import React from "react";
import { useForm } from "react-hook-form";
import FormLabel from "./FormLabel";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProjectForm = () => {
    const navigate = useNavigate();
    const toDay = new Date().toISOString().substring(0, 10);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        data.tasks = [];
        const postData = async () => {
            const response = await axios.post(
                "http://localhost:5000/api/v1/projects",
                { projectData: data }
            );
            if (response.data.success === "true") {
                console.log(response);
                navigate(`/project/${response.data?.result?.insertedId}`);
            }
        };
        postData();
    };
    return (
        <div className="container mx-auto">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg mx-auto bg-gray-200 rounded-lg p-5"
            >
                <div className="mb-4">
                    <FormLabel
                        label="Project Name"
                        labelId="project-name"
                    ></FormLabel>
                    <input
                        type="text"
                        className={`bg-gray-50 border ${
                            errors.projectName
                                ? "border-red-500"
                                : "border-gray-400"
                        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="CS B2B"
                        {...register("projectName", { required: true })}
                    />
                    {errors.projectName?.type === "required" && (
                        <span className="text-rose-600">
                            Please enter project name
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <FormLabel
                        label="Assigned By"
                        labelId="assigner-name"
                    ></FormLabel>
                    <input
                        type="text"
                        id="assigner-name"
                        className={`bg-gray-50 border ${
                            errors.assignerName
                                ? "border-red-500"
                                : "border-gray-400"
                        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="Nicki"
                        {...register("assignerName", { required: true })}
                    />
                    {errors.assignerName?.type === "required" && (
                        <span className="text-rose-600">
                            Please enter assigner name.
                        </span>
                    )}
                </div>
                <div className="flex gap-5">
                    <div className="w-40">
                        <FormLabel
                            label="Receiving Date"
                            labelId="receiving-date"
                        ></FormLabel>
                        <input
                            type="date"
                            id="receiving-date"
                            className={`bg-gray-50 border ${
                                errors.receivingDate
                                    ? "border-red-500"
                                    : "border-gray-400"
                            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            placeholder="Nicki"
                            defaultValue={toDay}
                            {...register("receivingDate", { required: true })}
                        />
                        {errors.receivingDate?.type === "required" && (
                            <span className="text-rose-600">
                                Please enter assigner name.
                            </span>
                        )}
                    </div>
                    <div className="w-48">
                        <FormLabel label="URN" labelId="urn"></FormLabel>
                        <input
                            type="text"
                            id="urn"
                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="CSg00"
                            {...register("urn")}
                        />
                        {/* {errors.urn?.type === "required" && (
                        <span className="text-rose-600">
                            Please enter assigner name.
                        </span>
                    )} */}
                    </div>
                    <div className="w-48">
                        <FormLabel label="DSID" labelId="dsid"></FormLabel>
                        <input
                            type="text"
                            id="dsid"
                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="236544"
                            {...register("dsid")}
                        />
                        {/* {errors.urn?.type === "required" && (
                        <span className="text-rose-600">
                            Please enter assigner name.
                        </span>
                    )} */}
                    </div>
                </div>
                <div>
                    <input
                        className="border p-3 my-3 bg-gray-300"
                        type="submit"
                        value="Create Project"
                    />
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
