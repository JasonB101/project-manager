import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
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
                <Switch>
                    <Route path="/opentickets" component={ (props) => <OpenTicketsTB {...openTicketsTBProps} {...props} />} />
                    <Route path="/sprints" component={ (props) => <SprintsTB {...sprintsTBProps} {...props} />} />
                </Switch>}

        </div>
    );
}

export default ToolBar;