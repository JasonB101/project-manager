import React, {useContext} from "react";
import {Redirect, Route} from "react-router-dom"
import {storeData} from "./Store"

const ProtectedRoute = (props) => {
   
    const { component: Component, ...rest } = props;
    const storeContext = useContext(storeData);
    const token = storeContext.token

    return (
       token ? <Route {...rest} component={Component} /> :
       <Redirect to="/login" />
    );
}

export default ProtectedRoute;