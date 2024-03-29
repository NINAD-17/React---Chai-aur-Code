import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}> {/* 'value' to pass data */}
            {children}
        </ UserContext.Provider>
    )
}

export default UserContextProvider;