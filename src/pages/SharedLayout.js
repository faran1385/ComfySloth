
import {Outlet} from "react-router";
import {Header} from "../Components/Header";
import {Footer} from "../Components/Footer";
//this component well render in every page
//Outlet is the current page component for example if we are in home page it renders home component
export function SharedLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}