import React from "react";
import UserContext from "./UserContext";



const UserContextProvider = ({children}) => {
    const [user, seUser] = React.useState(null)
   return(
    <UserContext.Provider value={{user, seUser}}>
    {children}
    </UserContext.Provider>
   )
}


export default UserContextProvider