import { Outlet } from "react-router-dom";
import Modal from "../components/Modal";
import useMainState from "../hooks/useMainState";

import gameBg from "../assets/game-bg.jpg";

export default function Layout() {

    const { modalElement, modalOpen, onClose } = useMainState();
    
    return (<>
        <div className="absolute top-18 left-0 w-full h-screen opacity-20 -z-10">
            <img src={gameBg} alt="bg" className="w-full h-full object-cover" />
        </div>
        <Modal children={modalElement} open={modalOpen} onClose={onClose} />

        <div className={"relative w-screen h-screen overflow-hidden"}>
            <div className={`mx-auto md:max-w-4xl h-screen border-x-2  relative`}>
                <div className="h-full flex flex-col">
                    <div className={"flex-1 "}>
                        <Outlet />
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    </>)
}