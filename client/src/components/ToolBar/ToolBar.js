import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Styles from "./ToolBar.module.scss";
import OpenTicketsTB from "./OpenTicketsTB/OpenTicketsTB"
import SprintsTB from "./SprintsTB/SprintsTB"
import { storeData } from "../../Store"

const ToolBar = (props) => {

    const storeDataContext = useContext(storeData);
    const token = storeDataContext.token
    const openTicketsTBProps = {
        toggleNewTicket: storeDataContext.toggleNewTicket
    }
    const sprintsTBProps = {
        toggleNewSprint: storeDataContext.toggleNewSprint
    }

    return (
        <div className={Styles.wrapper}>
            {token &&
                <Routes>
                    <Route path="/opentickets" element={<OpenTicketsTB {...openTicketsTBProps} />} />
                    <Route path="/sprints" element={<SprintsTB {...sprintsTBProps} />} />
                </Routes>}

        </div>
    );
}

export default ToolBar;