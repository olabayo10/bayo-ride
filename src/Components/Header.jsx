import { Link } from "react-router-dom";
import React, {useRef} from "react";
import { useState } from "react";
import mylogo from "../Images/mylogo.png"


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
                <img src={mylogo} alt="logo" width={130} height={70}/>
           
                <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
                        <li><Link to="/about" onClick={handleLinkClick}>ABOUT US</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link></li>
                        <li><Link to="/team" onClick={handleLinkClick}>OUR TEAM</Link></li>
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
