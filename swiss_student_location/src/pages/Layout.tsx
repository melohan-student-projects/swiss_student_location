import {Outlet} from "react-router-dom";
import Navbar from "@components/Navbar";

/**
 * Layout
 * @constructor
 */
export default function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
};