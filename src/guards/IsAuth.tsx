import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth";


export default function IsAuth() {


    const { user } = useAuth();

    if (user) {
        return <Navigate to="/game" />
    }

    return <Outlet />
}