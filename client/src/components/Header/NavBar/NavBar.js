import React from "react";
import Styles from "./NavBar.module.scss"

const NavBar = (props) => {

    return (
        <nav className={Styles.wrapper}>
            <h5>Open Tickets</h5>
            <h5>Sprints</h5>
            <div className="spacer"></div>
            <h5>Admin</h5>
        </nav>
    );
}

export default NavBar;