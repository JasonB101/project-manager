import React from "react";
import Styles from "./App.module.scss"
import Header from "./components/Header/Header";
import View from "./components/View/View";

const App = (props) => {

    return (
        <div className={Styles.wrapper}>
        <Header />
        <View />
        </div>
    );
}

export default App;