import React from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const pagesArray = [
    { pageName: "Home", pageUrl: "home" },
    { pageName: "Dashboard", pageUrl: "dashboard" },
    { pageName: "Projects", pageUrl: "projects" },
    { pageName: "Deliverables", pageUrl: "deliverables" },
    { pageName: "FC Comment", pageUrl: "fc-comment" },
];

const HeaderNavItems = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: "block", md: "none" },
            }}
        >
            {pagesArray.map((page) => (
                <Link key={page.pageName} to={`/${page.pageUrl}`}>
                    <Button
                        key={page.pageName}
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            mx: 2,
                            color: "black",
                            display: "block",
                        }}
                    >
                        {page.pageName}
                    </Button>
                </Link>
            ))}
        </Menu>
    );
};

export default HeaderNavItems;
