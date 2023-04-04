import { Link } from "react-router-dom";
import React from 'react';
import "../App.css";
import {FaUserAlt,FaUserCircle} from "react-icons/fa";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navgrad">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactUs">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userTable">StudentRegistration</Link>
                            </li>

                        </ul>
                        {/* Some work yet to be done here */}
                        <div>
                        <li className="nav-item d-flex justify-content-end mx-2">
                            <Link className="nav-link" to="/testFormwithformik"><FaUserAlt/> </Link>
                        </li>
                        <li className="nav-item d-flex justify-content-end">
                        <Link className="nav-link" to="/testFormwithformik">signin</Link>
                        </li>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar