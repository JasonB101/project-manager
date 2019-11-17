import React, {useEffect} from "react";
import {verifyUser} from "./ControllerFunctions/authFunctions"

const ProtectedRoute = (props) => {
    const authorized = false;
    useEffect(() => {
        (async () => {
            const user = await verifyUser(localStorage.getItem('token'));
            const [validUser, isAdmin] = user;
        })()
    })

    return (
        <></>
    );
}

export default ProtectedRoute;