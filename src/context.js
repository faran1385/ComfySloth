import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useFetch} from "./useFetch";

const AppContext = React.createContext();

export function AppProvider({children}) {
    //this state belongs featured product in home page
    const [featuredProducts, setFeaturedProduct] = useState([{}, {}, {}])
    //this state belongs Custom Furniture services
    const [services, setServices] = useState([{}, {}, {}])
    const [filters, setFilters] = useState({maxprice: 0})
    // this function well call useFetch hook and gives it the url and gets the response and set it in the dispatch function
    //this function gives 2 args:url:the url that you want to fetch data from,dispatch:this is for states.when you got the data from url now you need to set it in states
    async function FetchCaller(url, dispatch) {
        let res = await useFetch(url)
        dispatch(res.data)
    }

    const [price,setPrice]=useState(0)
    useEffect(() => {
        // getting the featured product infos
        FetchCaller('http://127.0.0.1:8000/product/home/api/?format=json', setFeaturedProduct)
        //getting the custom furniture services
        FetchCaller('http://localhost:8000/home/api/?format=json', setServices)

        FetchCaller('http://127.0.0.1:8000/product/filter-item/', setFilters)
    }, [])
    return (
        <AppContext.Provider value={{featuredProducts, services, filters,price,setPrice}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContextAPI = () => {
    return useContext(AppContext)
}