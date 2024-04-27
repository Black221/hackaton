import { Outlet } from "react-router-dom";

export default function Layout() {

    return (<>
        <div>
            <h1 className="">Je suis present partout</h1>
            <Outlet />
        </div>
    </>)
}