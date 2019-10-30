import React from "react";
import Styles from "./ProjectList.module.scss"

const ProjectList = (props) => {
    const {projects, updateCriteria, searchCriteria} = props;

    const onCheckBoxChange = (name) => {
        let checkedProjects = searchCriteria.projects;
        if (checkedProjects.indexOf(name) !== -1) {
            checkedProjects = checkedProjects.filter(x => x !== name);
        } else {
            checkedProjects.push(name);
        }

        updateCriteria("projects", checkedProjects);
    }


    
    const projectNames = projects.map(x => <li onClick={() => onCheckBoxChange(x)} key={x}><input 
                                                type="checkbox" checked={searchCriteria.projects.indexOf(x) !== -1}
                                                readOnly={true}/> {x}</li>);

    return (
        <div className={Styles.wrapper}>
            <h3>Projects:</h3>
            <ul>
                {projectNames}
            </ul>
            <hr></hr>
        </div>
    );
}

export default ProjectList;