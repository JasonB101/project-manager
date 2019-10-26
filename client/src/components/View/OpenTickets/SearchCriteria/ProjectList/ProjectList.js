import React from "react";
import Styles from "./ProjectList.scss"

const ProjectList = (props) => {

    return (
        <div className={Styles.wrapper}>
            <h2>Project</h2>
            <section>
                <label><input type="checkbox" /> theBrain</label>
            </section>
        </div>
    );
}

export default ProjectList;