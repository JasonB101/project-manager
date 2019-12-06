import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import Styles from "./View.module.scss";
import OpenTickets from "./OpenTickets/OpenTickets";
import Sprints from "./Sprints/Sprints"
import { storeData } from "../../Store"
import Login from "../Login/Login"
import ProtectedRoute from "../../ProtectedRoute"


const View = (props) => {

    const storeDataContext = useContext(storeData);
    const { openTickets } = storeDataContext.openTicketsHook;

    return (
        <section className={Styles.wrapper}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={() => <Redirect to="/login" />} />
                <ProtectedRoute path="/opentickets" component={() => <OpenTickets tickets={openTickets} />} />
                <ProtectedRoute path="/sprints" component={() => <Sprints sprints={openTickets} />} />
                <ProtectedRoute path="/admin" component={() => <OpenTickets tickets={openTickets} />} />
            </Switch>

        </section>
    );
}

export default View;