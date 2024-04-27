import { Outlet } from "react-router-dom"
import Login from "../auth/Login";
import useAuth from "../hooks/useAuth";

export default function AuthGuard() {

    const { user } = useAuth();

    if (user) {
        return <Outlet />
    }

    return <Login />
}