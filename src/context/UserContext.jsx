import { createContext } from "react";

export const UserContext = createContext();
 

export const UserProvider = ({ children }) => {

    const valoresPorDefecto = {
        name: "",
        setName: name => (valoresPorDefecto.name = name)
      };

    return(
        <UserContext.Provider value={{valoresPorDefecto}}>
            {children}
        </UserContext.Provider>
    )
}