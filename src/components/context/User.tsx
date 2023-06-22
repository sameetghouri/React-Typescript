import { useContext } from "react"
import { UserContext } from "./UserContext"
export const User =()=>{
    const userContext=useContext(UserContext)
    const handleLogin=()=>{
        // if (userContext){
            userContext.setUser({name:'ali', email:'ali@ali.com'});
        // }
    }
    const handleLogout =()=>{
        // if(userContext){
            userContext.setUser(null);
        // }
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.User?.name}</div>
            <div>User email is {userContext.User?.email}</div>
        </div>
    )
} 