import React from "react";
import Styles from "./Login.module.scss";
import LoginBox from "./LoginBox/LoginBox"

const Login = (props) => {

    return (
        <div className={Styles.wrapper}>
            <LoginBox/>
       </div>
    );
}

export default Login;