import React, {useContext} from "react";
import {Navigate} from "react-router-dom"
import {storeData} from "./Store"

const ProtectedRoute = ({ children }) => {
    const storeContext = useContext(storeData);
    const token = storeContext.token

    return token ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;