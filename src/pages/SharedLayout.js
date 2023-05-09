
import {Outlet} from "react-router";
import {Navbar} from "../Components/Navbar";

export function SharedLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}