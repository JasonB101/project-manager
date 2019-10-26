import React, { useContext } from "react";
import Styles from "./App.module.scss"
import Header from "./components/Header/Header";
import View from "./components/View/View";
import InsertTicket from "./components/View/InsertTicket/InsertTicket";
import CloseTicket from "./components/View/Ticket/CloseTicket/CloseTicket";
import { storeData } from "./Store"

const App = (props) => {
    const storeDataContext = useContext(storeData);
    const {showNewTicket} = storeDataContext.toggleNewTicket;
    const {showCloseTicket} = storeDataContext.toggleCloseTicket;

    return (
        <div className={Styles.wrapper}>
            <Header />
            <View />
            {showNewTicket && <InsertTicket />}
            {true && <CloseTicket />}
        </div>
    );
}

export default App;