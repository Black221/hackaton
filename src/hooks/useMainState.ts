import {useContext} from "react";
import { MainStateContext } from "../providers/MainProvider";


const useMainState = () => {
    return useContext(MainStateContext);
}

export default useMainState;