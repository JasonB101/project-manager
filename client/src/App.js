import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Styles from "./App.module.scss"
import Header from "./components/Header/Header";
import View from "./components/View/View";
import ToolBar from "./components/ToolBar/ToolBar"
import InsertTicket from "./components/View/InsertTicket/InsertTicket";
import Login from "./components/Login/Login"
import { storeData } from "./Store"

const App = (props) => {
    const storeDataContext = useContext(storeData);
    const { showNewTicket } = storeDataContext.toggleNewTicket;
    const location = useLocation();
    
    // Hide header and toolbar on auth routes
    const isAuthRoute = location.pathname === '/login' || location.pathname === '/';

    return (
        <div className={isAuthRoute ? Styles.authWrapper : Styles.wrapper}>
            {isAuthRoute ? (
                <div className={Styles.authHeader}>
                    <h1 className={Styles.authTitle}>Project Manager</h1>
                    <p className={Styles.authSubtitle}>Streamline your workflow</p>
                </div>
            ) : (
                <Header />
            )}
            <View />
            {!isAuthRoute && <ToolBar />}
            {showNewTicket && <InsertTicket />}
        </div>
    );
   
}

export default App;