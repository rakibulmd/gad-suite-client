import React from "react";

const Task = () => {
    return (
        <div>
            <div className="p-1 flex gap-3 bg-gray-300 text-sm">
                <div className="flex flex-col items-start min-w-[200px]">
                    <p>URN: CSg001FY2379</p>
                    <p>Vehicle: Animated OA </p>
                    <p>DSID: 453244</p>
                </div>
                <div className="flex flex-col items-start min-w-[300px]">
                    <p>Deliverables: B2b Global Packaging</p>
                    <p>Deadline: 24/11/22</p>
                    <p>Submitted: 23/11/22</p>
                </div>
                <div className="flex flex-col items-start min-w-[300px]">
                    <p>Assigned By: Nicki Tefaris</p>
                    <p>Assigned To: Anasis Majumder</p>
                    <p>QA By: Nazmul Islam</p>
                </div>
                <div className="flex flex-col items-start min-w-[300px]">
                    <p>Status: Completed</p>
                    <p>Remarks: MDF not found</p>
                </div>
            </div>
        </div>
    );
};

export default Task;
