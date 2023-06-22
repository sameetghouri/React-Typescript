import { useState } from "react";

type authuser={
    name:string,
    email:string
}

export const User =()=>{
    const [user, setUser]=useState<null|authuser>(null);
    const handleLogin=()=>{
       setUser({name:'ali', email:'ali@ali.com'});
    }
    const handleLogout =()=>{
        setUser(null);
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is{user?.name}</div>
            <div>User email is{user?.email}</div>
        </div>
    )
} 