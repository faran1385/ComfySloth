import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useFetch} from "./useFetch";

const AppContext = React.createContext();
export function AppProvider({children}) {
    const [featuredProduct,setFeaturedProduct]=useState([{id:0},{id:1},{id:2}])
    async function FetchCaller(url){
        let res=await useFetch(url)
        console.log(res.data['-NV4ZgUFWaSxukmimVaa'])
        setFeaturedProduct(res.data['-NV4ZgUFWaSxukmimVaa'])
    }
    useEffect(()=>{
        FetchCaller('https://comfy-sloth-c3054-default-rtdb.firebaseio.com/FeaturedProducts.json')
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