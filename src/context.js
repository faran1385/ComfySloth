import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext = React.createContext();
export function AppProvider({children}) {
    const [featuredProduct,setFeaturedProduct]=useState([{id:0},{id:1},{id:2}])
    async function fetchData(){
        let res=await axios.get(`http://firstfact.freehost.io/`)
        console.log(res.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <AppContext.Provider value={{featuredProduct}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContextAPI = () => {
    return useContext(AppContext)
}