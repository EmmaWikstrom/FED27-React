import React from "react";
import { NavLink } from "react-router-dom";


const Homepage = ({user}) => {
    return (
        <div>
            <h1>Greetings, {user.firstName}</h1>

            <NavLink to="/contact">
                <button>Contact Us</button>
            </NavLink>
        </div>
    );
};

export default Homepage;