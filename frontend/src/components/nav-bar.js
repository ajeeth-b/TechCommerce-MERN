import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/"}>Shop</Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className=" navbar-nav mr-auto" >
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to={"/add"}> Add </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to={"/cart"}> Cart</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default NavBar;