import React, { useContext } from "react";
import Styles from "./ToolBar.module.scss";
import OpenTicketsTB from "./OpenTicketsTB/OpenTicketsTB"
import { storeData } from "../../Store"

const ToolBar = (props) => {

    const storeDataContext = useContext(storeData);
    const openTicketsTBProps = {
        toggleNewTicket: storeDataContext.toggleNewTicket
    }

    return (
        <div className={Styles.wrapper}>
            <OpenTicketsTB {...openTicketsTBProps}/>
        </div>
    );
}

export default ToolBar;