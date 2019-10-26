import React, {useContext, useState} from "react";
import Styles from "./InsertTicket.module.scss";
import {storeData} from "../../../Store"

const InsertTicket = (props) => {

    const storeDataContext = useContext(storeData);
    const {toggleNewTicket} = storeDataContext.toggleNewTicket;
    const openTicketsHook = storeDataContext.openTicketsHook;
    const {saveTicket} = storeDataContext.openTicketsMethods;

    const [formInputs, changeInputs] = useState({
        projectName: "",
        task: "",
        description: "",
        severity: "Medium",
        user: "User",
        date: new Date().toDateString()
    })

    const inputChange = (e) => {
        changeInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }

    const submitTicket = () => {
        saveTicket(openTicketsHook, formInputs);
        toggleNewTicket(false);
    }

    return (
        <div className={Styles.wrapper}>
            <h2>New Ticket</h2>
            <br></br>
            <h3>Project <input onChange={inputChange} type="text" name="projectName" value={formInputs.projectName} /></h3>
            <h3>Task <input onChange={inputChange} type="text" name="task" value={formInputs.task} /></h3>
            <h4>Description</h4>
            <textarea onChange={inputChange} rows="6" name="description" value={formInputs.description}/>
            <span>Severity Level</span>
            <select onChange={inputChange} name="severity" defaultValue="Medium">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <div className={Styles.buttonWrapper}>
                <button onClick={submitTicket} >Submit</button>
                <button onClick={(e) => toggleNewTicket(false)}>Cancel</button>
            </div>
       </div>
    );
}

export default InsertTicket;