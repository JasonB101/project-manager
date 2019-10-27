import React from "react";
import Styles from "./ProjectList.module.scss"

const ProjectList = (props) => {

    const {projects} = props;

    const projectNames = projects.map(x => <li key={x}><input type="checkbox" /> {x}</li>)

    return (
        <div className={Styles.wrapper}>
            <h3>Projects:</h3>
            <ul>
                {projectNames}
            </ul>
        </div>
    );
}

export default ProjectList;