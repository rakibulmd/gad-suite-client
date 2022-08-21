import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [signInWithGoogle, googleUser, loading, error] =
        useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            const userData = { email: user.email };
            console.log(userData);
            const getToken = async () => {
                const response = await axios.get(
                    `http://localhost:5000/login/${user.email}`
                );
                if (response.data) {
                    console.log(response.data);
                    localStorage.setItem("accessToken", response?.data);
                }
            };
            getToken();
            navigate("/home");
        }
    }, [googleUser, user, navigate]);
    if (loading) {
        return <div>Loading...</div>;
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
