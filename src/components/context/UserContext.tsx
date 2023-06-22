import { useState, createContext } from "react"
export type authuser={
    name:string
    email:string
}
type usercontextType={
    User:authuser|null,
    setUser:React.Dispatch<React.SetStateAction<authuser|null>>
}

type usercontextproviderprops={
    children:React.ReactNode
}
// export const UserContext=createContext<usercontextType | null>(null)

//we are using Type assertion instead
export const UserContext=createContext({} as usercontextType)
export const UserContextProvider=(props:usercontextproviderprops)=>{
    const [User,setUser]=useState<null|authuser>(null)
    return(
        <UserContext.Provider value={{User,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}