import React, { useContext, useState, useEffect } from "react";
import Styles from "./SearchCriteria.module.scss";
import ProjectList from "./ProjectList/ProjectList"
import Severity from "./Severity/Severity"
import { storeData } from "../../../../Store"
import SortBy from "./SortBy/SortBy";

const SearchCriteria = (props) => {

    const storeDataContext = useContext(storeData);
    const { openTickets } = storeDataContext.openTicketsHook;
    const { changeTicketsToShow } = storeDataContext.ticketsToShow;
    const projects = new Set(openTickets.map(x => x.projectName));
    const [searchCriteria, changeCriteria] = useState({
        projects: [...projects],
        severity: ["High", "Medium", "Low"],
        sortBy: "newest"
    })

    const ticketsToLoad = (criteria) => {
        let tickets = openTickets
        .filter(x => {
            return (criteria.projects.length === 0 || criteria.projects.indexOf(x.projectName) !== -1) &&
                (criteria.severity.length === 0 || criteria.severity.indexOf(x.severity) !== -1);
        })
        .sort((a, b) => criteria.sortBy === "newest" ? new Date(b.date) - new Date(a.date) : 
        new Date(a.date) - new Date(b.date));

        changeTicketsToShow(tickets);
    }



    const updateCriteria = (type, value) => {
        let newCriteria = {
            ...searchCriteria,
            [type]: value
        }

        changeCriteria(newCriteria);
        ticketsToLoad(newCriteria);
    }


    return (
        <div className={Styles.wrapper}>
            <ProjectList projects={[...projects]} updateCriteria={updateCriteria} />
            <br></br>
            <Severity updateCriteria={updateCriteria} />
            <br></br>
            <SortBy updateCriteria={updateCriteria}/>
        </div>
    );
}

export default SearchCriteria;