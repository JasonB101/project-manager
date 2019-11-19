import React, { useContext } from "react";
import Styles from "./App.module.scss"
import Header from "./components/Header/Header";
import View from "./components/View/View";
import ToolBar from "./components/ToolBar/ToolBar"
import InsertTicket from "./components/View/InsertTicket/InsertTicket";
import Login from "./components/Login/Login"
import { storeData } from "./Store"

const App = (props) => {
    const storeDataContext = useContext(storeData);
    const {showNewTicket} = storeDataContext.toggleNewTicket;
    const {token} = storeDataContext.token;

    if (token){
    return (
        <div className={Styles.wrapper}>
            <Header />
            <View />
            <ToolBar />
            {showNewTicket && <InsertTicket />}
        </div>
    );
} else {
    return (
        <div className={Styles.wrapper}>
            <Login/>
        </div>
    )
}
}

export default App;