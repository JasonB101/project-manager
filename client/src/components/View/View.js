import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Styles from "./View.module.scss";
import OpenTickets from "./OpenTickets/OpenTickets";
import Sprints from "./Sprints/Sprints"
import { storeData } from "../../Store"
import Login from "../Login/Login"
import ProtectedRoute from "../../ProtectedRoute"


const View = (props) => {

    const storeDataContext = useContext(storeData);
    const { openTickets } = storeDataContext.openTicketsHook;

    return (
        <section className={Styles.wrapper}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/opentickets" element={<ProtectedRoute><OpenTickets tickets={openTickets} /></ProtectedRoute>} />
                <Route path="/sprints" element={<ProtectedRoute><Sprints sprints={openTickets} /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute><OpenTickets tickets={openTickets} /></ProtectedRoute>} />
            </Routes>

        </section>
    );
}

export default View;