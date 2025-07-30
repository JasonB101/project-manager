import React, { useContext, useState } from "react";
import Styles from "./InsertTicket.module.scss";
import { storeData } from "../../../Store"

const InsertTicket = (props) => {

    const storeDataContext = useContext(storeData);
    const { toggleNewTicket } = storeDataContext.toggleNewTicket;
    const openTicketsHook = storeDataContext.openTicketsHook;
    const { saveTicket } = storeDataContext.openTicketsMethods;

    const [formInputs, changeInputs] = useState({
        projectName: "",
        task: "",
        description: "",
        severity: "Medium",
        user: "User",
        date: new Date().toDateString(),
        sprint: "",
        status: "open"
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
        <div className={Styles.outterDiv}>
            <div className={Styles.wrapper}>
                <h2>Create New Ticket</h2>
                
                <div className={Styles.inputGroup}>
                    <label htmlFor="projectName">Project Name</label>
                    <input 
                        id="projectName"
                        onChange={inputChange} 
                        type="text" 
                        name="projectName"
                        value={formInputs.projectName} 
                        placeholder="Enter project name"
                        autoFocus 
                    />
                </div>

                <div className={Styles.inputGroup}>
                    <label htmlFor="task">Task</label>
                    <input 
                        id="task"
                        onChange={inputChange} 
                        type="text" 
                        name="task" 
                        value={formInputs.task}
                        placeholder="Enter task title"
                    />
                </div>

                <div className={Styles.inputGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description"
                        onChange={inputChange} 
                        name="description" 
                        value={formInputs.description}
                        placeholder="Describe the task in detail..."
                    />
                </div>

                <div className={Styles.inputGroup}>
                    <label htmlFor="severity">Severity Level</label>
                    <select 
                        id="severity"
                        onChange={inputChange} 
                        name="severity" 
                        defaultValue="Medium"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div className={Styles.buttonWrapper}>
                    <button onClick={submitTicket}>Create Ticket</button>
                    <button onClick={(e) => toggleNewTicket(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default InsertTicket;