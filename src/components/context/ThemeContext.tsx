import { createContext } from "react";

type ThemeContextProviderProps={
    children:React.ReactNode
}
const theme = {
    primary: {
        main: '#3f51b5',
        text: '#fff'
    },
    secondary: {
        main: '#f50057',
        text: '#fff'  
    }
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}:ThemeContextProviderProps)=>{
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}