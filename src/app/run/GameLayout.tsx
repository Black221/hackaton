import { Outlet, useNavigate } from "react-router-dom"
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import useMainState from "../../hooks/useMainState";
import gameOver from "../../assets/audios/game-over.mp3";
import gameWin from "../../assets/audios/game-win2.mp3";


export default function GameLayout() {

    // eslint-disable-next-line 

    const navigate = useNavigate();
    const {setModalElement, setModalOpen, onClose, question, cGame} = useMainState();

    

    const audioWin = new Audio(gameWin);
    audioWin.volume = 1;
    const audioOver = new Audio(gameOver);
    audioOver.volume = 1;


    return (<>
        <div className={"w-full h-screen flex items-center flex-col space-y-4 p-2"}>
            <div className="w-full p-2 flex items-center bg-white border-2  rounded-xl" >
                <Button className="" label="X" action={ () => {
                    setModalElement(
                        <div className="flex flex-col items-center space-y-4">
                            <div className="text-2xl font-bold text-center">
                                Voulez-vous vraiment quitter le jeu ?
                            </div>
                            <div className="flex space-x-2">
                                <Button label="Oui" action={() => {
                                    setModalOpen(false);
                                    navigate('/game');
                                    onClose();
                                }} active={true} />
                                <Button label="Non" action={() => {
                                    setModalOpen(false);
                                }} active={true} />
                            </div>
                        </div>
                    )
                    setModalOpen(true);
                }} active={true} />
                <div className="flex-1">
                    <ProgressBar progress={question} max={cGame?.questions.length || 0} />
                </div>
                <div>
                </div>
            </div>
            <div className="rounded-xl flex-1 w-full">
                <Outlet />
            </div>
            
        </div>
    </>)
}