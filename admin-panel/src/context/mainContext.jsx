import { createContext, useState } from "react";

export const MainContext = createContext(null)

export function MainContextProvider({children}) {
    const [user, setUser] = useState(sessionStorage.getItem("user") || false)

    return (
        <MainContext.Provider value={{
            user, setUser
        }}>
            {children}           
        </MainContext.Provider>
    )
}