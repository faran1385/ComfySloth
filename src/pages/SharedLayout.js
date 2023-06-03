import {Outlet} from "react-router";
import {Header} from "../Components/Header";
import {Footer} from "../Components/Footer";
import {useLocation} from "react-router-dom";
//this component well render in every page
//Outlet is the current page component for example if we are in home page it renders home component
export function SharedLayout() {
    //getting path name of window location
    const {pathname} = useLocation()
    if (pathname.toLowerCase() === "/emailconfirmed" ||pathname.toLowerCase() === "/signin" || pathname.toLowerCase() === "/login" || pathname.toLowerCase() === "/emailconfirmation"|| pathname.toLowerCase() === "/forgetpassword") {
        document.body.style.background = "#333"
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.background = "white"
        document.body.style.overflow = "auto"
    }
    return (
        <>
            {pathname.toLowerCase() === "/forgetpassword" ||pathname.toLowerCase() === "/emailconfirmed" ||pathname.toLowerCase() === "/signin" || pathname.toLowerCase() === "/login" || pathname.toLowerCase() === "/emailconfirmation" ? "" :
                <Header/>}
            <Outlet/>
            {pathname.toLowerCase() === "/forgetpassword" ||pathname.toLowerCase() === "/emailconfirmed" ||pathname.toLowerCase() === "/signin" || pathname.toLowerCase() === "/login" || pathname.toLowerCase() === "/emailconfirmation" ? "" :
                <Footer/>}
        </>
    );
}