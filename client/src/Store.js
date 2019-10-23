import React, {createContext} from "react";

const Store = (props) => {

    const storeData = createContext();

    const contextValue = {}

    return (
        <storeData.Provider value={contextValue}>
            {props.children}
        </storeData.Provider>
    );
}

export default Store;