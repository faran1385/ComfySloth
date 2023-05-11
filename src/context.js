import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext = React.createContext();
export function AppProvider({children}) {
    const [featuredProduct,setFeaturedProduct]=useState([{id:0},{id:1},{id:2}])
    async function fetchData(route){
        let res=await axios.get(`https://comfy-sloth-c3054-default-rtdb.firebaseio.com/${route}.json`)
        setFeaturedProduct(res.data['-NV4ZgUFWaSxukmimVaa'])
        console.log(res.data['-NV4ZgUFWaSxukmimVaa'])
    }
    useEffect(()=>{
        fetchData('FeaturedProducts')
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