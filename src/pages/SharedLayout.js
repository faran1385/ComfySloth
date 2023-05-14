
import {Outlet} from "react-router";
import {Header} from "../Components/Header";
import {Footer} from "../Components/Footer";

export function SharedLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}