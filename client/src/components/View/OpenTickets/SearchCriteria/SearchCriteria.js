import React, { useContext} from "react";
import Styles from "./SearchCriteria.module.scss";
import ProjectList from "./ProjectList/ProjectList"
import Severity from "./Severity/Severity"
import { storeData } from "../../../../Store"
import SortBy from "./SortBy/SortBy";

const SearchCriteria = (props) => {

    const storeDataContext = useContext(storeData);
    const { openTickets } = storeDataContext.openTicketsHook;
    const projects = new Set(openTickets.map(x => x.projectName));
    const [searchCriteria, changeCriteria] = props.criteriaHook;



    const updateCriteria = (type, value) => {
        let newCriteria = {
            ...searchCriteria,
            [type]: value
        }
        changeCriteria(newCriteria);
    }


    return (
        <div className={Styles.wrapper}>
            <ProjectList projects={[...projects]} updateCriteria={updateCriteria} searchCriteria={searchCriteria} />
            <br></br>
            <Severity updateCriteria={updateCriteria} searchCriteria={searchCriteria} />
            <br></br>
            <SortBy updateCriteria={updateCriteria}/>
        </div>
    );
}

export default SearchCriteria;