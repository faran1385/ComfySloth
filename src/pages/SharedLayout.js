
import {Outlet} from "react-router";
import {Header} from "../Components/Header";
import {Footer} from "../Components/Footer";
import {useLocation} from "react-router-dom";
//this component well render in every page
//Outlet is the current page component for example if we are in home page it renders home component
export function SharedLayout() {
    //getting path name of window location
    const {pathname}=useLocation()
    if(pathname==="/signin"||pathname==="/login"){
        document.body.style.background = "#333"
    }else{
        document.body.style.background = "white"
    }
    return (
        <>
            {pathname==="/signin"||pathname==="/login"?"":<Header/>}
            <Outlet/>
            {pathname==="/signin"||pathname==="/login"?"":<Footer/>}
        </>
    );
}