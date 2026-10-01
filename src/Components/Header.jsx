import { Link } from "react-router-dom";
import React, {useRef} from "react";
import { useState } from "react";
import mylogo from "../Images/mylogo.png"


const links = [
    { to: "/", label: "HOME"},
    { to: "/about", label: "ABOUT US" },
    { to: "/contact", label: "CONTACT US" },
    { to: "/team", label: "OUR TEAM" },
];


export default function Header () {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = () => {
        menuRef.current.classList.toggle("active");
    };

    const handleLinkClick = () => {
        menuRef.current.classList.remove("active");
    }

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function closeMenu() {
        setIsOpen(false);
    }


    return (
        <header className="header-head">
            <div className="nav-content">
                <img src={mylogo} alt="Bayoride Logistics logo"/>
           
                <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <ul>
                        {links.map(({ to, label }) => (
                            <li key={to}>
                                <Link to={to} onClick={handleLinkClick}>{label}</Link>
                            </li>
                        ))} 
                    </ul>
                </nav>
                <div className={`menu-icon ${menuOpen ? "show" : ""}`} onClick={() => {
                    setMenuOpen(!menuOpen);
                    handleToggle();
                }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}
