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
    const { showNewTicket } = storeDataContext.toggleNewTicket;

    //need to set up routes, and if there is not a token, then keep redirecting to auth/login
        return (
            <div className={Styles.wrapper}>
                <Header />
                <View />
                <ToolBar />
                {showNewTicket && <InsertTicket />}
            </div>
        );
   
}

export default App;