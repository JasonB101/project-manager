import React, { useContext } from "react";
import Styles from "./App.module.scss"
import Header from "./components/Header/Header";
import View from "./components/View/View";
import InsertTicket from "./components/View/InsertTicket/InsertTicket";
import { storeData } from "./Store"

const App = (props) => {
    const storeDataContext = useContext(storeData);
    const {showNewTicket, toggleNewTicket} = storeDataContext.toggleNewTicket;

    return (
        <div className={Styles.wrapper}>
            <Header />
            <View />
            {showNewTicket && <InsertTicket />}
        </div>
    );
}

export default App;