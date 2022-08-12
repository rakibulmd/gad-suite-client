import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header>
            <nav className="border-b border-gray-700">
                <div className="bg-gray-700 text-white p-3 text-left flex justify-between">
                    <span> user: {user?.displayName}</span>
                    <button onClick={() => signOut(auth)}>Sign Out</button>
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
