import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

export function Root() {
    return <div className="nav">
            <input type="checkbox" id="nav-check"/>
                <div className="nav-header">
                    <div className="nav-title">
                        Goyave le brave
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/article'>Articles</NavLink>
                    <NavLink to='/contact'>Contacts</NavLink>
                </div>
        </div>
}