import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    if (loading) {
        return <div>Loading....</div>;
    }
    if (!user) {
        return navigate("/login");
    }

    return children;
};

export default RequireAuth;
