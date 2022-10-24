import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Loading = () => {
    return (
        <Box sx={{ width: "50vw" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </Box>
    );
};

export default Loading;
