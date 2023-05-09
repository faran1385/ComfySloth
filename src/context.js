import React, {useContext} from "react";
import axios from "axios";

const AppContext = React.createContext();
export function AppProvider({children}) {
    return (
        <AppContext.Provider value={{AppProvider}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContextAPI = () => {
    return useContext(AppContext)
}