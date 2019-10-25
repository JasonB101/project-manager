import React from "react";
import Styles from "./NavBar.module.scss"

const NavBar = (props) => {

    return (
        <nav className={Styles.wrapper}>
            <h4>Open Tickets</h4>
            <h4>Sprints</h4>
            <div className="spacer"></div>
            <h4>Admin</h4>
        </nav>
    );
}

export default NavBar;