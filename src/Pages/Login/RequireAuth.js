import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RequireAuth = ({ children }) => {
    // const [user, loading] = useAuthState(auth);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!user) {
    //         console.log("from req auth", user);
    //         navigate("/login");
    //     }
    // }, [loading, navigate, user]);
    // if (loading) {
    //     return <div>Loading....</div>;
    // }
    return children;
};

export default RequireAuth;
