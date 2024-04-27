import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import gem from "../../assets/gem.svg";
import exp from "../../assets/exp.svg";
import profile from "../../assets/profile.svg";

export default function MenuLayout() {


    const { user } = useAuth();

    return(<>
        <div className="w-full flex flex-col items-center justify-center h-full ">
            <div className="w-[95%] rounded-xl flex items-center justify-between relative z-80  bg-white p-3 py-4 mt-3 border ">
                <h1 className="flex flex-col items-center">
                    <img src={profile} alt="profile" className="w-10 h-10" />
                    {user?.getName()}
                </h1>
                <div className="flex items-center space-x-2">
                    <img src={gem} alt="gem" className="w-10 h-10" />
                    <span>0</span>
                </div>
                <div className="flex items-center space-x-2">
                    <img src={exp} alt="exp" className="w-10 h-10" />
                    <span>0</span>
                </div>
            </div>
            <Outlet />
        </div>
    </>)
}