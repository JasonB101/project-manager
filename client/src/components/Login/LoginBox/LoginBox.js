import React, { useState, useContext } from "react";
import Styles from "./LoginBox.module.scss";
import { login } from "../../../ControllerFunctions/authFunctions"
import {storeData} from "../../../Store"
import { withRouter } from "react-router-dom"

const LoginBox = (props) => {
    const storeContext = useContext(storeData);
    const setUserInfo = storeContext.setUser;
    const [formInputs, changeInputs] = useState({
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("")

    const inputChange = (e) => {
        changeInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }

    const submit = async () => {

        const loginData = await login(formInputs);

        if (loginData.success) {
            setUserInfo(loginData.data)
            props.history.push("/opentickets")
        }
        if (!loginData.success) {
            if (loginData.data){
                setErrorMessage(login.Data);
            } else {
                setErrorMessage("Something went wrong, try again later.")
            }
        }

    }

    return (
        <div className={Styles.wrapper}>
            <div>
                <h3>email <input onChange={inputChange} type="text" name="email"
                    value={formInputs.email} autoFocus /></h3>
                <h3>password <input onChange={inputChange} type="password" name="password" value={formInputs.password} /></h3>
            </div>
            <p>{errorMessage}</p>
            <button onClick={submit} >Login</button>
        </div>
    );
}

export default withRouter(LoginBox);