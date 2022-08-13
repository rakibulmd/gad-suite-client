import React from "react";
import { Link } from "react-router-dom";
import StatusBar from "./StatusBar";

const Header = () => {
    // if (loading) {
    //     return <div>Loading.....</div>;
    // }
    return (
        <header>
            <StatusBar></StatusBar>
            <nav>
                <ul className="flex justify-center gap-10 items-center py-2">
                    <li>
                        <Link
                            className="px-3 py-1 border border-gray-700 rounded-sm uppercase "
                            to="/home"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="px-3 py-1 border border-gray-700 rounded-sm uppercase"
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="px-3 py-1 border border-gray-700 rounded-sm uppercase"
                            to="/newTask"
                        >
                            new Task
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
