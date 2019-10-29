import React, {useContext} from "react";
import Styles from "./View.module.scss";
import OpenTickets from "./OpenTickets/OpenTickets";
import {storeData} from "../../Store"


const View = (props) => {

    const storeDataContext = useContext(storeData);
    const {ticketsToShow} = storeDataContext.ticketsToShow;

    return (
        <section className={Styles.wrapper}>
            <OpenTickets tickets={ticketsToShow}/>
        </section>
    );
}

export default View;