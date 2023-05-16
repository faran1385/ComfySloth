import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useFetch} from "./useFetch";

const AppContext = React.createContext();
export function AppProvider({children}) {
    //this state belongs featured product in home page
    const [featuredProduct,setFeaturedProduct]=useState([{id:0},{id:1},{id:2}])
    //this state belongs Custom Furniture services
    const [services,setServices]=useState([{id:0},{id:1},{id:2}])

    // this function well call useFetch hook and gives it the url and gets the response and set it in the dispatch function
    //this function gives 2 args:url:the url that you want to fetch data from,dispatch:this is for states.when you got the data from url now you need to set it in states
    async function FetchCaller(url,dispatch){
        let res=await useFetch(url)
        dispatch(res.data)
    }
    useEffect(()=>{
        // getting the featured product infos
        FetchCaller('https://comfy-sloth-c3054-default-rtdb.firebaseio.com/FeaturedProducts.json',setFeaturedProduct)
        //getting the custom furniture services
        FetchCaller('https://comfy-sloth-c3054-default-rtdb.firebaseio.com/Services.json',setServices)
    },[])
    return (
        <AppContext.Provider value={{featuredProduct,services}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContextAPI = () => {
    return useContext(AppContext)
}