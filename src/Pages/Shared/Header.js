import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <header>
            <nav className="border-b border-gray-700">
                <div className="bg-gray-700 text-white p-3 text-left flex justify-between">
                    <span> user: {user?.displayName}</span>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                <ul className="flex justify-center gap-10">
                    <li>
                        <a href="/home">Dashboard</a>
                    </li>
                    <li>
                        <a href="/home">Add Entry</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
