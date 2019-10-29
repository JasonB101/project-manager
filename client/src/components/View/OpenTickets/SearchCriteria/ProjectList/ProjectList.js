import React, {useState} from "react";
import Styles from "./ProjectList.module.scss"

const ProjectList = (props) => {
    const {projects, updateCriteria} = props;
    const projectsToInputs = projects.reduce((result, x) => {
        result[x] = false;
        return result;
    }, {});

    const [projectValues, changeProjectValues] = useState(projectsToInputs);

    const onCheckBoxChange = (e) => {
        let isChecked = e.target.checked;
        let values = {...projectValues};
        values[e.target.name] = isChecked;
        for (let key in values) {
            if (!values[key]) {
                delete values[key]
            }
        }
        updateCriteria("projects", Object.keys(values));
        changeProjectValues({...projectValues, [e.target.name]: isChecked})
    }


    
    const projectNames = projects.map(x => <li key={x}><input onChange={onCheckBoxChange} type="checkbox" name={x}/> {x}</li>);

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