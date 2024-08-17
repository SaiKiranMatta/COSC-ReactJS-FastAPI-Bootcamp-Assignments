import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/COSC.png";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                <img src={Logo} alt="COSC" />
                {/* TASK 1: Add your Roll Number */}
                <h2>Roll No. </h2>
            </div>
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/calculator" className="nav-link">
                            Calculator
                        </Link>
                    </li>
                    {/* TASK 2.2: Add link for Temperature converter component */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
