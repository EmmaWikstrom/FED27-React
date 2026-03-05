import React from "react";

const Homepage = ({user}) => {
    return (
        <div>
            <h1>Greetings, {user.firstName}</h1>
            <p></p>
        </div>
    );
};

export default Homepage;