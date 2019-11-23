import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Styles from "./ToolBar.module.scss";
import OpenTicketsTB from "./OpenTicketsTB/OpenTicketsTB"
import { storeData } from "../../Store"

const ToolBar = (props) => {

    const storeDataContext = useContext(storeData);
    const token = storeDataContext.token
    const openTicketsTBProps = {
        toggleNewTicket: storeDataContext.toggleNewTicket
    }

    return (
        <div className={Styles.wrapper}>
            {token &&
                <Switch>
                    <Route path="/opentickets" component={ (props) => <OpenTicketsTB {...openTicketsTBProps} {...props} />} />
                </Switch>}

        </div>
    );
}

export default ToolBar;