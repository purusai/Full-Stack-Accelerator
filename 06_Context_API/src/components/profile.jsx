import React, {useContext} from 'react'
import UserContext from '../contex/UserContext'


const profile = () => {
       
    const { user } = userContext(UserContext)
    
    if(!user) return <div>Please Login</div>
    return <div>Welcom {user.username} </div>

  
}

export default profile
