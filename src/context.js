import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useFetch} from "./useFetch";

const AppContext = React.createContext();

export function AppProvider({children}) {
    const INITIAL_VALUE_OF_FILTERED_PRODUCTS = {
        category: "all",
        company: "all",
        color: "all",
        price: 0,
        freeShopping: false,
        sortBy: "Price (Lowest)"
    }
    const [siteImages, setSiteImages] = useState()
    //this state belongs featured product in home page
    const [featuredProducts, setFeaturedProduct] = useState([{}, {}, {}])
    //this state belongs Custom Furniture services
    const [services, setServices] = useState([{}, {}, {}])
    //these are filters information
    const [filters, setFilters] = useState({maxprice: 0})
    // this function well call useFetch hook and gives it the url and gets the response and set it in the dispatch function
    //this function gives 2 args:url:the url that you want to fetch data from,dispatch:this is for states.when you got the data from url now you need to set it in states
    async function FetchCaller(url, dispatch) {
        let res = await useFetch(url)
        console.log(res.data)
        dispatch(res.data)
    }

    //this is for the way the products going to show
    const [isSingleLineLayout, setSingleLineLayout] = useState(false)

    // this is for value of filters
    const [filteredProduct, setFilteredProduct] = useState(INITIAL_VALUE_OF_FILTERED_PRODUCTS)

    //this is for deploy filter as selected filter
    //it runs when you click on filter
    function setActive(key, value) {
        let newFilteredProducts = {}
        for (let i in filteredProduct) {
            if (i !== key) {
                newFilteredProducts[i] = filteredProduct[i]
            } else {
                newFilteredProducts[i] = value
            }
        }
        console.log(newFilteredProducts)
        setFilteredProduct(newFilteredProducts)
    }

    useEffect(() => {
        //getting site icon and hero section images
        FetchCaller('http://127.0.0.1:8000/home/api/image-icon/', setSiteImages)
        // getting the featured product infos
        FetchCaller('http://127.0.0.1:8000/home/api/', setFeaturedProduct)
        //getting the custom furniture services
        FetchCaller('http://localhost:8000/home/api/?format=json', setServices)
        //getting filters
        FetchCaller('http://127.0.0.1:8000/product/filter-item/', setFilters)
    }, [])
    return (
        <AppContext.Provider value={{
            INITIAL_VALUE_OF_FILTERED_PRODUCTS,
            setActive,
            setFilteredProduct,
            filteredProduct,
            siteImages,
            featuredProducts,
            services,
            filters,
            setSingleLineLayout,
            isSingleLineLayout
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContextAPI = () => {
    return useContext(AppContext)
}