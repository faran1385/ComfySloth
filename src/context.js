import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useFetch} from "./useFetch";

const AppContext = React.createContext();
export function AppProvider({children}) {
    //this is the state for featured product in home page
    const [featuredProduct,setFeaturedProduct]=useState([{id:0},{id:1},{id:2}])
    // this function well call useFetch hook and gives it the url
    async function FetchCaller(url){
        let res=await useFetch(url)
        console.log(res.data['-NV4ZgUFWaSxukmimVaa'])
        setFeaturedProduct(res.data['-NV4ZgUFWaSxukmimVaa'])
    }
    useEffect(()=>{
        // getting the featured product infos
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