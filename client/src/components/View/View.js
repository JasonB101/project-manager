import React from "react";
import Styles from "./View.module.scss";
import OpenTickets from "./OpenTickets/OpenTickets";


const View = (props) => {

    return (
        <section className={Styles.wrapper}>
            <OpenTickets/>
        </section>
    );
}

export default View;