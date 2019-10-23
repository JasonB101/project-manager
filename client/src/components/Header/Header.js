import React from "react";
import Styles from "./Header.module.scss"
import NavBar from "./NavBar/NavBar"

const Header = (props) => {

    return (
        <header className={Styles.wrapper}>
            Project Manager
            <div className="spacer"></div>
            <NavBar />
        </header>
    );
}

export default Header;