import {useContext} from "react";
import { AuthStateContext } from "../providers/AuthProvider";


const useAuth = () => {
    return useContext(AuthStateContext);
}

export default useAuth;