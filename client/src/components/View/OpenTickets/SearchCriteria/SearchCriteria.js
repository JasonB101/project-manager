import React from "react";
import Styles from "./SearchCriteria.module.scss";
import ProjectList from "./ProjectList/ProjectList"

const SearchCriteria = (props) => {

    return (
        <div className={Styles.wrapper}>
            <ProjectList/>
       </div>
    );
}

export default SearchCriteria;