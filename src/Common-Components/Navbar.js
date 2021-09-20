import React from "react";
import { NavLink } from "react-router-dom";
// import './index.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-light bg-transparent">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Mr.Xmen</NavLink>
                                    <ul id="navbar" className="navbar-nav">
                                        <li  className="nav-item">
                                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact className="nav-link" to="/Feed">Feed</NavLink>
                                        </li>
                                    </ul>
                                </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;