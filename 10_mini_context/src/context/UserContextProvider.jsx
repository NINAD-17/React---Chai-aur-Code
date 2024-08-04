import React from "react";
import UserContext from "./UserContext";
 
// step 2: 
// here, children is a generic name. It's like "pass all the things that comes"
const UserContextProvider = ({children}) => { // here, childrens are all the components wrapped in the <UserContextProvider> ... </UserContextProvider> in the App.jsx
    const [user, setUser] = React.useState(null); // to save the data
 
    return (
        // wrap the data with context
        <UserContext.Provider value={{user, setUser}}> {/* 'value' to pass data */}
            {children} {/* components */}
        </ UserContext.Provider>
    )
}

export default UserContextProvider;