import React from "react";
import Styles from "./OpenTickets.module.scss";
import TaskList from "./TaskList/TaskList";
import SearchCriteria from "./SearchCriteria/SearchCriteria";
import ToolBar from "../ToolBar/ToolBar"

const OpenTickets = (props) => {

    return (
        <div className={Styles.wrapper}>
            <SearchCriteria/>
            <TaskList />
            <ToolBar />
       </div>
    );
}

export default OpenTickets;