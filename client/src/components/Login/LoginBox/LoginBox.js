import React, { useState, useContext } from "react";
import Styles from "./LoginBox.module.scss";
import { login } from "../../../ControllerFunctions/authFunctions"
import {storeData} from "../../../Store"
import { useNavigate } from "react-router-dom"

const LoginBox = () => {
    const navigate = useNavigate();
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

    function errorToggle(message){
        setErrorMessage(message);
        setTimeout(() => setErrorMessage(""), 5000);
    }

    const submit = async () => {

        const loginData = await login(formInputs);
        
        if (loginData.success) {
            setUserInfo(loginData.data)
            navigate("/opentickets")
        }
        if (!loginData.success) {
            if (loginData.data){
                console.log("Made it past the promise")
                errorToggle(loginData.data);
            } else {
                errorToggle("Something went wrong, try again later.")
            }
        }

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            submit();
        }
    }

    return (
        <div className={Styles.wrapper}>
            <h2 className={Styles.title}>Welcome Back</h2>
            
            <div className={Styles.inputGroup}>
                <label htmlFor="email">User</label>
                <input 
                    id="email"
                    onChange={inputChange} 
                    onKeyDown={handleKeyDown} 
                    type="text" 
                    name="email"
                    value={formInputs.email} 
                    placeholder="Enter your username"
                    autoFocus 
                />
            </div>

            <div className={Styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    onChange={inputChange} 
                    onKeyDown={handleKeyDown} 
                    type="password" 
                    name="password" 
                    value={formInputs.password}
                    placeholder="Enter your password"
                />
            </div>

            <div className={Styles.errorMessage}>{errorMessage}</div>
            
            <button className={Styles.loginButton} onClick={submit}>
                Login
            </button>
        </div>
    );
}

export default LoginBox;