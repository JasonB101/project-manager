import React, {useContext} from "react";
import Styles from "./View.module.scss";
import OpenTickets from "./OpenTickets/OpenTickets";
import {storeData} from "../../Store"


const View = (props) => {

    const storeDataContext = useContext(storeData);
    const {openTickets} = storeDataContext.openTicketsHook;

    return (
        <section className={Styles.wrapper}>
            <OpenTickets tickets={openTickets}/>
        </section>
    );
}

export default View;