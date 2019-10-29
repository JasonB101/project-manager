import React, {useContext} from "react";
import Styles from "./SearchCriteria.module.scss";
import ProjectList from "./ProjectList/ProjectList"
import Severity from "./Severity/Severity"
import {storeData} from "../../../../Store"

const SearchCriteria = (props) => {

    const storeDataContext = useContext(storeData);
    const {openTickets} = storeDataContext.openTicketsHook;
    const projects = new Set(openTickets.map(x => x.projectName));


    return (
        <div className={Styles.wrapper}>
            <ProjectList projects={[...projects]}/>
            <br></br>
            <Severity />
       </div>
    );
}

export default SearchCriteria;