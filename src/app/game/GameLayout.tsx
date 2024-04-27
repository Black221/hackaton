import { Outlet, useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";
import Button from "../../components/Button";
import useMainState from "../../hooks/useMainState";
import DisplayAnswer from "../../components/DisplayAnswer";

import gameOver from "../../assets/audios/game-over.mp3";
import gameWin from "../../assets/audios/game-win2.mp3";


export default function GameLayout() {

    const [progress , setProgress] = useState(1);

    const navigate = useNavigate();
    const {setModalElement, setModalOpen, onClose, cGame, question, setQuestion, responses } = useMainState();


    const isCorrect = (): boolean => {
        const res = responses[question] === ((cGame && cGame.questions[question].response) ? cGame.questions[question].response : undefined);
        if (res) {
            audioWin.play();
        } else {
            audioOver.play();
        }
        return res;
    }

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
                    <ProgressBar progress={progress} max={cGame?.questions.length || 0} />
                </div>
                <div>
                </div>
            </div>
            <div className="rounded-xl flex-1 w-full">
                <Outlet />
            </div>
            <div className="flex items-center justify-between w-full">
                
                <Button className="w-full" active={true} label={
                    question < (cGame ? cGame?.questions.length : 0) - 1 ? "Suivant" : "Terminer"
                } action={() => {
                    if (question < (cGame ? cGame?.questions.length : 0) - 1) {
                        setQuestion(question + 1);
                        setProgress(progress + 1);
                        setModalElement(<>
                            <div>
                                <DisplayAnswer isCorrect={isCorrect()} />
                                <Button className="w-full" label="Continuer" action={() => {
                                    onClose();
                                }} active={true} />
                            </div>
                        </>)
                        setModalOpen(true);
                    } else {
                        setModalElement(<>
                            <div className="flex flex-col items-center space-y-4">
                                <div className="text-2xl font-bold text-center">
                                    Score: {responses.filter((response, index) => {
                                        return response === cGame?.questions[index].response;
                                    }).length}/{cGame?.questions.length}
                                </div>
                                <DisplayAnswer isCorrect={
                                    responses.filter((response, index) => {
                                        return response === cGame?.questions[index].response;
                                    }).length >= cGame.questions.length / 2
                                } />
                                <div className="flex items-center justify-center space-x-2">
                                    <Button label="Retourner" action={() => {
                                        navigate('/game');
                                        onClose();
                                    }} active={true} />
                                </div>
                            </div>
                        </>)
                        setModalOpen(true);
                    }
                }} />
            </div>
        </div>
    </>)
}