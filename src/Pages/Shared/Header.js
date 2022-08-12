import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="border-b border-gray-700">
                <ul class="flex justify-center gap-10">
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
