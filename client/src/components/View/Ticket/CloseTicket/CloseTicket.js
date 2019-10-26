import React, {useContext} from "react";
import Styles from "./CloseTicket.module.scss";
import { storeData } from "../../../../Store"

const CloseTicket = (props) => {

    const storeDataContext = useContext(storeData);
    const {toggleCloseTicket} = storeDataContext.toggleCloseTicket;

    return (
        <div className={Styles.wrapper}>

       </div>
    );
}

export default CloseTicket;