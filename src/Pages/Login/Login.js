import React from "react";
import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [user, navigate]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (user) {
        return navigate("/home");
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="p-3 border-2 border-gray-700"
            >
                Log in with Google
            </button>
        </div>
    );
};

export default Login;
