import React from "react";

const FormLabel = ({ label, labelId }) => {
    return (
        <label
            htmlFor={labelId}
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
            {label}
        </label>
    );
};

export default FormLabel;
