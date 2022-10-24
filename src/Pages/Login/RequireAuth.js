import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    if (loading) {
        return <Loading> {children}</Loading>;
    }
    if (!user) {
        console.log("trigered");
        navigate("/login");
    }

    return children;
};

export default RequireAuth;
