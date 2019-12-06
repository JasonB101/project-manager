import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";
import { storeData } from "../../../Store";

const NavBar = (props) => {

    const storeContext = useContext(storeData);
    const token = storeContext.token

    return (
        <nav className={Styles.wrapper}>
            {token &&
                <>
                    <Link to="/focus">Focus</Link>
                    <Link to="/sprints">Sprints</Link>
                    <Link to="/opentickets">Open Tickets</Link>
                    <div className="spacer"></div>
                    <Link to="/admin">Admin</Link>
                </>}

        </nav>
    );
}

export default NavBar;